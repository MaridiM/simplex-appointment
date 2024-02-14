import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Appointment extends Document {
    @Prop({ type: String, required: true })
    user_id: string;

    @Prop({ type: String, required: true })
    doctor_id: string;

    @Prop({ type: String, required: true })
    slot: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
