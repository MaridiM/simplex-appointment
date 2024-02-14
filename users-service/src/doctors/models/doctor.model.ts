import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Doctor extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    spec: string;

    @Prop({ type: Array<string>, required: true })
    slots: [String]
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
