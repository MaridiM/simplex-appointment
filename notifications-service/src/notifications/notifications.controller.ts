import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { MessagePattern } from '@nestjs/microservices';
import { Appointment } from './types';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @MessagePattern({ cmd: 'notificationUser' })
    async notificationUser(appointment: Appointment): Promise<void> {  
        this.notificationsService.notificationUser(appointment);
    }
    @MessagePattern({ cmd: 'sendReminderOneDayBefore' })
    async sendReminderOneDayBefore(appointment: Appointment): Promise<void> {  
        console.log('sendReminderOneDayBefore', appointment)
        // return this.notificationsService.sendReminderOneDayBefore(appointment);
    }
    
    @MessagePattern({ cmd: 'sendReminderTwoHoursBefore' })
    async sendReminderTwoHoursBefore(appointment: Appointment): Promise<void> {
        console.log('sendReminderOneDayBefore', appointment)
        // return this.notificationsService.sendReminderTwoHoursBefore(appointment);
    }


}
