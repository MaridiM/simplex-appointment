import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsPhoneNumber, IsString, Length } from 'class-validator';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true })
    @IsPhoneNumber()
    phone: string;
    
    @Prop({ required: true })
    @IsString()
    @Length(2, 32)
    name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
