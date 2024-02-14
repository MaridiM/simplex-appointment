import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './models/appointment.model';
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
        MongooseModule.forFeature([
            { name: Appointment.name, schema: AppointmentSchema },
        ]),
    ],
    providers: [AppointmentsService],
    controllers: [AppointmentsController],
    exports: [AppointmentsService]
})
export class AppointmentsModule {}
