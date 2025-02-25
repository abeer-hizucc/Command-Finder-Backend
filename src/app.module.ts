import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandModule } from './commands/command/command.module';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [CommandModule, DatabaseModule,
    ThrottlerModule.forRoot([
      {
        name:'free',
        limit:3,
        ttl:6000
      },
      {
        name:'pro',
        limit:10,
        ttl:6000
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide:APP_GUARD,
      useClass:ThrottlerGuard
    }
  ],
})
export class AppModule {}
