import { PartialType } from '@nestjs/mapped-types';
import { FindOneInventoryDto } from "./create-inventory.dto";

export class UpdateInventoryDto extends PartialType(FindOneInventoryDto) {
}