import { Logger, Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      ClientsModule.register([
          {
              name: 'USER',
              transport: Transport.TCP,
              options: {
                  host: 'localhost',
                  // host: 'users-service',
                  port: 8003,
              },
          },
      ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, Logger]
})
export class NotificationsModule {}
