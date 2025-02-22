import { PartialType } from '@nestjs/swagger';
import { PLATFORM } from './command.data';
import { IsString, IsInt, IsEnum } from 'class-validator';

export class CommandDTO {
  id: number;
  name: string;
  description: string;
  platform: PLATFORM;
}

export class CreateCommandDTO {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsEnum(['Windows', 'Linux', 'MacOS'], {
    message: 'Platform must be Windows, Linux or MacOS',
  })
  platform: PLATFORM;
}
export class UpdateCommandDTO extends PartialType(CreateCommandDTO) {}
