import { Logger, Module } from '@nestjs/common';
import { NotificationsModule } from './notifications/notifications.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        // MongooseModule.forRoot('mongodb://mongodb:27017/simplex'),
        MongooseModule.forRoot('mongodb+srv://maridim92:simplexgroup@simplex.uy3kkag.mongodb.net/simplex?retryWrites=true&w=majority'),
        NotificationsModule,
    ],
    providers: [
        {
            provide: Logger,
            useValue: new Logger('notifications'), // Set the logger name
        }
    ]
})
export class AppModule {}
