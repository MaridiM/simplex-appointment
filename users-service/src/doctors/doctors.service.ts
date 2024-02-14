import { ConsoleLogger, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Doctor, DoctorSchema } from './models/doctor.model';
import { DoctorInputDto } from './dtos/doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectModel(Doctor.name) private doctorModel: Model<typeof DoctorSchema>
    ) {}
        
    async getDoctors(): Promise<Doctor[]> {
        const doctors: Doctor[] = await this.doctorModel.find({ })
        return !doctors ? [] : doctors
    }
    
    async getDoctor (id: string): Promise<Doctor> {
        const doctor: Doctor = await this.doctorModel.findById(id)
        if (!doctor)  throw new HttpException('Такого доктора не существует.', HttpStatus.NOT_FOUND)
        return doctor
    }

    async updateDoctor({ id, slot }: DoctorInputDto): Promise<Document<Doctor>> {
        try {
            const candidate: Document<Doctor> = await this.doctorModel.findByIdAndUpdate(
                id,
                { $push: { slots: slot } },
                { new: true }
            );

            if (!candidate) {
                console.error(`Doctor with ID ${id} not found.`);
                return null;
            }

            return candidate;
        } catch (error) {
            console.error('Error updating doctor:', error);
            throw error; 
        }
    }
}
