import { PickType } from "@nestjs/mapped-types";
import { IsPhoneNumber, IsString, Length } from "class-validator";
import { User } from "../models/user.model";


export class UserInputDto {
    @IsPhoneNumber()
    phone: string;
    
    @IsString()
    @Length(2, 32)  
    name: string;
}

export class UserOutputDto extends PickType(User, ['_id', 'phone', 'name']) {}
