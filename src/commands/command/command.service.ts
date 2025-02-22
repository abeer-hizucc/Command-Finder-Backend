import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommandDTO, CreateCommandDTO, UpdateCommandDTO } from './command.dto';
import { COMMANDS, PLATFORM } from './command.data';

@Injectable()
export class CommandService {
  private commands: CommandDTO[] = COMMANDS;

  findAll(): CommandDTO[] {
    return this.commands;
  }
  findById(id: number): CommandDTO | HttpException {
    let command = this.commands.find((command) => command.id === id);
    if (command != undefined) {
      return command;
    } else {
      return new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
        404,
      );
    }
  }
  findByCommandName(name: string): CommandDTO[] | HttpException {
    let command = this.commands.filter((command) => command.name === name);
    if (command != undefined) {
      return command;
    } else {
      return new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
        404,
      );
    }
  }
  findByPlatform(platform: PLATFORM): CommandDTO[] | HttpException {
    let command = this.commands.filter(
      (command) => command.platform === platform,
    );
    if (command != undefined) {
      return command;
    } else {
      return new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
        404,
      );
    }
  }
  create(command: CreateCommandDTO): CommandDTO {
    let commandByHighestID = this.commands.sort((a, b) => b.id - a.id)[0];
    let newCommand: CommandDTO = {
      id: commandByHighestID.id + 1,
      ...command,
    };
    this.commands.push(newCommand);
    return newCommand;
  }
  updateByName(
    name: string,
    command: UpdateCommandDTO,
  ): CommandDTO | HttpException {
    let index = this.commands.findIndex((command) => command.name === name);
    if (index != -1) {
      let newCommand: CommandDTO = {
        ...this.commands[index],
        ...command,
      };
      this.commands[index] = newCommand;
      return newCommand;
    } else {
      return new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Command not Found for ${name}`,
        },
        404,
      );
    }
  }

  deleteByName(name: string): CommandDTO[] | HttpException {
    let deletableCommands = this.commands.filter(
      (command) => command.name === name,
    );
    if (deletableCommands.length > 0) {
      this.commands = this.commands.filter((command) => command.name !== name);
      return deletableCommands;
    } else {
      return new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Command not Found for ${name}`,
        },
        404,
      );
    }
  }
  deleteById(id: number): CommandDTO | HttpException {
    let deletableCommand = this.commands.find((command) => command.id === id);
    if (deletableCommand != undefined) {
      this.commands = this.commands.filter((command) => command.id !== id);
      return deletableCommand;
    } else {
      return new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `Command not Found for ${id}` },
        404,
      );
    }
  }
}
