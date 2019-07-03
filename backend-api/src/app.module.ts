import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetsController } from './widgets/widgets.controller';
import { WidgetsService } from './widgets/widgets.service';

@Module({
  imports: [],
  controllers: [AppController, WidgetsController],
  providers: [AppService, WidgetsService],
})
export class AppModule {}
