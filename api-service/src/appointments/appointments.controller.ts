import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAppointmentInputDto } from './dtos/create-appointment.dto';
import { Appointment } from 'src/appointments/types';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Get()
    async getAppointments (): Promise<Appointment[]> {
        return this.appointmentsService.getAppointments();
    }
    
    @Post('create')
    async createAppointment(@Body() body: CreateAppointmentInputDto): Promise<Appointment> {
        return this.appointmentsService.createAppointment(body);
    }
    
}