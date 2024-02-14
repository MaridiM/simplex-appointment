import { Controller } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAppointmentInputDto, CreateAppointmentOutputDto } from './dtos/create-appointment.dto';
import { Appointment } from './models/appointment.model';

@Controller()
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @MessagePattern({ cmd: 'appointments' })
    async getAppointments(): Promise<Appointment[]> {
        return this.appointmentsService.getAppointments();
    }
    
    @MessagePattern({ cmd: 'appointment/create' })
    async createAppointment(appointment: CreateAppointmentInputDto): Promise<CreateAppointmentOutputDto> {
        return this.appointmentsService.createAppointment(appointment);
    }
}
