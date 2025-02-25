import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ROLES } from './command.data';
import { Prisma } from '@prisma/client';
import { CommandService } from './command.service';
import { CreateCommandDTO, UpdateCommandDTO } from './command.dto';

@Controller('command')
export class CommandController {
  constructor(private commandService: CommandService) {}
  @Get()
  findAll(@Query('role') role?: ROLES) {
    return this.commandService.findAll();
  }
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.commandService.findById(id);
  }
  @Get('name/:name')
  findByCommandName(@Param('name') name: string) {
    return this.commandService.findByCommandName(name);
  }
  @Post()
  create(@Body() createCommandDTO: Prisma.CommandsCreateInput) {
    return this.commandService.create(createCommandDTO);
  }
  @Patch('name/:name')
  updateByName(
    @Param('name') name: string,
    @Body() updateCommandDTO: Prisma.CommandsUpdateInput,
  ) {
    return this.commandService.updateByName(name, updateCommandDTO);
  }
  @Delete(':name')
  deleteById(@Param('name') name: string) {
    return this.commandService.deleteByName(name);
  }
}
