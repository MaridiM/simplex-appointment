import { IsPhoneNumber, IsString, Length } from 'class-validator';

 export class CreateAppointmentInputDto {
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