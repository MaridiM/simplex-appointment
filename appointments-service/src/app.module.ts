import { Module } from '@nestjs/common';
import { AppointmentsModule } from './appointments/appointments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        // MongooseModule.forRoot('mongodb://mongodb:27017/simplex'),                       
        MongooseModule.forRoot('mongodb+srv://maridim92:simplexgroup@simplex.uy3kkag.mongodb.net/simplex?retryWrites=true&w=majority'),                       
        AppointmentsModule
    ],
})
export class AppModule {}
