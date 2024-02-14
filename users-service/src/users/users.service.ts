import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { Model } from 'mongoose';
import { UserInputDto, UserOutputDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<typeof UserSchema>) {}
        

    async getUser(id: string): Promise<UserOutputDto> {
        const candidate: User = await this.userModel.findById(id)
        if (!candidate) throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)

        return {
            _id: candidate._id,
            name: candidate['name'],
            phone: candidate['phone'],
        }
    }
    
    async addUser({ phone, name }: UserInputDto): Promise<UserOutputDto> {
        const candidate: User = await this.userModel.findOne({ phone })
        if (candidate) return candidate

        const newUser = await this.userModel.create({ phone, name })

        return {
            _id: newUser._id,
            name: newUser['name'],
            phone: newUser['phone'],
        }
    }
}
