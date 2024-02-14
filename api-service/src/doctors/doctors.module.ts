import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
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
    providers: [DoctorsService],
    controllers: [DoctorsController]
})
export class DoctorsModule {}
