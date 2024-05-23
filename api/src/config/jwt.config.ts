import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

export default class JwtConfig {
  static getJwtConfig(configService: ConfigService): JwtModuleOptions {
    return {
      global: configService.get<boolean>('JWT_GLOBAL'),
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: configService.get<string>('JWT_SIGNOPTIONS_EXPIRESIN'),
      },
    };
  }
  static getJwtSecret(): string {
    let configService = new ConfigService();
    return configService.get<string>('JWT_SECRET');
  }
}

export const jwtConfigAsync: JwtModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> =>
    JwtConfig.getJwtConfig(configService),
};
