import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandModule } from './commands/command/command.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CommandModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
