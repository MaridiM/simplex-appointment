import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Appointment } from './types';
import { CreateAppointmentInputDto } from './dtos/create-appointment.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppointmentsService {
    constructor(
        @Inject('APPOINTMENT') private  readonly appointmentClient: ClientProxy,
        @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy
    ) {}

    async getAppointments (): Promise<Appointment[]> {
        try {
            const data = await firstValueFrom(this.appointmentClient.send({ cmd: 'appointments' }, {}));
            return data
        } catch (error) {
            console.error('Записей не найдено:', error);
        };
    }

    async createAppointment(body: CreateAppointmentInputDto): Promise<Appointment> {
        try {
            const data = await firstValueFrom(this.appointmentClient.send({ cmd: 'appointment/create' }, body));
            await this.notificationClient.send({ cmd: 'notificationUser' }, body);
            return data
        } catch (error) {
            console.error('Ошибка записи:', error);
        }
    }
}
