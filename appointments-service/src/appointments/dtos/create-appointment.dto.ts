import { PickType } from '@nestjs/mapped-types'
import { Appointment } from "../models/appointment.model";
import { IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateAppointmentInputDto extends PickType(Appointment, ['doctor_id']) {
    @IsString()
    slot: string
    
    @IsPhoneNumber()
    phone: string
    
    @IsString()
    @Length(2, 32)
    name: string

    @IsString()
    doctor_id: string
}

export class CreateAppointmentOutputDto extends PickType(Appointment, ['_id', 'user_id', 'doctor_id', 'slot' ]) {}