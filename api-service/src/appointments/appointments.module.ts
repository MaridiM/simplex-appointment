import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'APPOINTMENT',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    // host: 'appointments-service',
                    port: 8001,
                },
            },
            {
                name: 'NOTIFICATION',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    // host: 'notification-service',
                    port: 8002,
                },
            },
        ]),
    ],
    controllers: [AppointmentsController],
    providers: [AppointmentsService],
})
export class AppointmentsModule {}
