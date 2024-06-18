import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Client } from 'minio';
import { Photo } from '../properties/entities/photo.entity';

@Injectable()
export class InventoriesService {
  @InjectRepository(Inventory)
  private inventoriesRepository: Repository<Inventory>;

  @InjectRepository(Photo)
  private photosRepository: Repository<Photo>;

  async getPresignedUrlFromPhotos(photos: number[]) {
    let minioClient = new Client({
      endPoint: 'minio.taffin.ovh',
      port: 443,
      useSSL: true,
      accessKey: 'mODvNLwCYcqJXNf4Lci1',
      secretKey: '3YXQium7Hrmyqz1zS694t6gF4wgbe6ufO7DLABuf',
    });

    let photosUrl = [];

    for (const photo of photos) {

      const photoObj = await this.photosRepository.findOne({ where: {id: photo }});
      const filename = photoObj.path;
      const url = await minioClient.presignedGetObject('immotep-files', filename, 2*60*60);
      photosUrl.push(url);
    }

    return photosUrl;
  }

  async findOne(id: number) {
    let review = await this.inventoriesRepository.findOne({
      where: { id: id },
      relations: [
        'contract',
        'contract.renter',
        'contract.owner',
        'contract.property',
        'contract.property.rooms',
        'minutes',
        'minutes.element',
        'minutes.element.elementType',
        'minutes.element.room',
      ],
    });

    const returnObject = {
      id: review.id,
      isStartingInventory: review.isStartingInventory,
      date: review.date,
      progress: review.progress,
      contract: {
        id: review.contract.id,
        beginDate: review.contract.beginDate,
        endDate: review.contract.endDate,
      },
      renter: {
        id: review.contract.renter.id,
        lastname: review.contract.renter.lastname,
        firstname: review.contract.renter.firstname,
      },
      owner: {
        id: review.contract.owner.id,
        lastname: review.contract.owner.lastname,
        firstname: review.contract.owner.firstname,
      },
      property: {
        id: review.contract.property.id,
      },
      rooms: []
    };

    const roomsData = [];
    const minutesIndex = {};
    for (const room of review.contract.property.rooms) {
      roomsData.push({
        id: room.id,
        number: room.number,
        description: room.description,
        area: room.area,
        minutes: [],
      });
    }

    // Trier les pièces selon leur attribut number
    roomsData.sort((a, b) => {
      if (a.number > b.number) return 1;
      if (a.number < b.number) return -1;
      return 0;
    });

    for (const i in roomsData) {
      minutesIndex[roomsData[i].id] = i;
    }

    for (const minute of review.minutes) {
      roomsData[minutesIndex[minute.element.room.id]].minutes.push({
        id_edl: minute.id_edl,
        id_element: minute.id_element,
        photos: await this.getPresignedUrlFromPhotos(minute.photos),
        remark: minute.remark,
        grade: minute.grade,
        number: minute.element.number,
        elementType: minute.element.elementType.lib,
      })
    }

    for (const room of roomsData) {
      room.minutes.sort((a, b) => {
        if (a.number > b.number) return 1;
        if (a.number < b.number) return -1;
        return 0;
      })
    }

    returnObject.rooms = roomsData;
    return returnObject;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    let inventory = new Inventory();
    inventory.progress = updateInventoryDto.progress;
    return this.inventoriesRepository.update(id, inventory);
  }
}