import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommandDTO, CreateCommandDTO, UpdateCommandDTO } from './command.dto';
import { COMMANDS, PLATFORM } from './command.data';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommandService {
  private commands: CommandDTO[] = COMMANDS;
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}
  async findAll(): Promise<CommandDTO[]> {
    return this.databaseService.commands.findMany();
  }
  async findById(id: number){
    // let command = this.commands.find((command) => command.id === id);
    // if (command != undefined) {
    //   return command;
    // } else {
    //   return new HttpException(
    //     { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
    //     404,
    //   );
    // }
    return this.databaseService.commands.findUnique({ where:
      { id: id }
    });
  }
  async findByCommandName(name: string) {
    // let command = this.commands.filter((command) => command.name === name);
    // if (command != undefined) {
    //   return command;
    // } else {
    //   return new HttpException(
    //     { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
    //     404,
    //   );
    // }
    return this.databaseService.commands.findMany({ where:
      { name: name }
    });
  }
  async findByPlatform(platform: PLATFORM){
    // let command = this.commands.filter(
    //   (command) => command.platform === platform,
    // );
    // if (command != undefined) {
    //   return command;
    // } else {
    //   return new HttpException(
    //     { status: HttpStatus.NOT_FOUND, error: 'Command not found' },
    //     404,
    //   );
    // }
    return this.databaseService.commands.findMany({ where:
      { platform: platform }
    });
  }
  async create(command: Prisma.CommandsCreateInput): Promise<CommandDTO> {
    // let commandByHighestID = this.commands.sort((a, b) => b.id - a.id)[0];
    // let newCommand: CommandDTO = {
    //   id: commandByHighestID.id + 1,
    //   ...command,
    // };
    // this.commands.push(newCommand);
    // return newCommand;
    return this.databaseService.commands.create({ data: command });
  }
  async updateByName(
    name: string,
    command: Prisma.CommandsUpdateInput,
  ){
    // let index = this.commands.findIndex((command) => command.name === name);
    // if (index != -1) {
    //   let newCommand: CommandDTO = {
    //     ...this.commands[index],
    //     ...command,
    //   };
    //   this.commands[index] = newCommand;
    //   return newCommand;
    // } else {
    //   return new HttpException(
    //     {
    //       status: HttpStatus.NOT_FOUND,
    //       error: `Command not Found for ${name}`,
    //     },
    //     404,
    //   );
    // }
   
    return this.databaseService.commands.update({ where: { name }, data: command });
  }

 async deleteByName(name: string) {
    // let deletableCommands = this.commands.filter(
    //   (command) => command.name === name,
    // );
    // if (deletableCommands.length > 0) {
    //   this.commands = this.commands.filter((command) => command.name !== name);
    //   return deletableCommands;
    // } else {
    //   return new HttpException(
    //     {
    //       status: HttpStatus.NOT_FOUND,
    //       error: `Command not Found for ${name}`,
    //     },
    //     404,
    //   );
    // }
    return this.databaseService.commands.delete({ where: { name
    }});
  }
  deleteById(id: number){
  //   let deletableCommand = this.commands.find((command) => command.id === id);
  //   if (deletableCommand != undefined) {
  //     this.commands = this.commands.filter((command) => command.id !== id);
  //     return deletableCommand;
  //   } else {
  //     return new HttpException(
  //       { status: HttpStatus.NOT_FOUND, error: `Command not Found for ${id}` },
  //       404,
  //     );
  //   }
  return this.databaseService.commands.delete({ where: { id }});
  }
}
