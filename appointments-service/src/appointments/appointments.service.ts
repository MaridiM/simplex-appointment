import { Model } from 'mongoose';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './models/appointment.model';
import { CreateAppointmentInputDto, CreateAppointmentOutputDto } from './dtos/create-appointment.dto';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppointmentsService {
    constructor(
        @Inject('USER') private  readonly usersClient: ClientProxy,
        @InjectModel(Appointment.name) private appointmentModel: Model<typeof AppointmentSchema>,
    ) {}
    
    async getAppointments(): Promise<Appointment[]>{
        const appointments: Appointment[] = await this.appointmentModel.find({})
        return !appointments ? [] : appointments
    }
    
    async createAppointment(appointment: CreateAppointmentInputDto): Promise<CreateAppointmentOutputDto> {
        const currentDoctor = await firstValueFrom(this.usersClient.send({ cmd: 'doctor' }, appointment.doctor_id));
        if (!currentDoctor) throw new HttpException('Врач не найден', HttpStatus.NOT_FOUND);
        
        const currentUser = await firstValueFrom(this.usersClient.send({ cmd: 'user/add' }, { phone: appointment.phone, name: appointment.name }));
        if (!currentUser) throw new HttpException('Не удалось добавить пользователя для записи', HttpStatus.CONFLICT);
        
        const checkSlots = currentDoctor.slots.filter(slot => slot === appointment.slot);
        if (checkSlots.length) throw new HttpException('Вы не можете записаться на данное время', HttpStatus.CONFLICT);
        
        try {
            await firstValueFrom(this.usersClient.send({ cmd: 'doctor/update' }, { id: appointment.doctor_id, slot: appointment.slot }));

            const newAppointment: any = await this.appointmentModel.create({
                user_id: currentUser._id,
                doctor_id: appointment.doctor_id,
                slot: appointment.slot,
            });
    
            return {
                _id: newAppointment._id,
                user_id: newAppointment.user_id,
                doctor_id: newAppointment.doctor_id,
                slot: newAppointment.slot,
            };
        } catch (error) {
            console.error('Error creating appointment:', error);
            throw new HttpException('Failed to create appointment', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
