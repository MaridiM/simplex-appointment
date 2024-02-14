import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        // MongooseModule.forRoot('mongodb://mongodb:27017/simplex'),                       
        MongooseModule.forRoot('mongodb+srv://maridim92:simplexgroup@simplex.uy3kkag.mongodb.net/simplex?retryWrites=true&w=majority'),     
        UsersModule, DoctorsModule
    ],
})
export class AppModule {}
