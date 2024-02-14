import { Injectable, Logger } from '@nestjs/common';
import { Appointment } from './types';

@Injectable()
export class NotificationsService {
    constructor(private readonly logger: Logger) {}

    async notificationUser(appointment: Appointment): Promise<void> {
        const message = `${appointment.slot.split(' ')[0]} | Привет ${ user.name }! Вам записались к ${ doctor.spec } в ${ appointment.slot.split(' ')[1] }!`;
        this.logger.log(message);
    }
    async sendReminderTwoHoursBefore(appointment: Appointment): Promise<void> {
        const message = `{{ current_date }} | Привет {{ user.name }}! Вам через 2 часа к {{ doctor.spec }} в {{ slot.time }}!`;
        this.logger.log(message);
    }
    
    async sendReminderOneDayBefore(appointment: Appointment): Promise<void> {
        const message = `{{ current_date }} | Привет {{ user.name }}! Напоминаем что вы записаны к {{ doctor.spec }} завтра в {{ slot.time }}!`;
        this.logger.log(message);
    }

}
