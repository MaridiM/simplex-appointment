import { Controller } from '@nestjs/common';
import { Doctor } from './models/doctor.model';
import { DoctorsService } from './doctors.service';
import { DoctorInputDto } from './dtos/doctor.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Document } from 'mongoose';

@Controller()
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @MessagePattern({ cmd: 'doctors' })
    async getDoctors(): Promise<Doctor[]> {
        return this.doctorsService.getDoctors()
    }
    
    @MessagePattern({ cmd: 'doctor' })
    async getDoctor(id: string): Promise<Doctor> {
        return this.doctorsService.getDoctor(id)
    }

    @MessagePattern({ cmd: 'doctor/update' })
    async updateDoctor (body: DoctorInputDto): Promise<Document<Doctor>> {
       return this.doctorsService.updateDoctor(body)
    } 
}
