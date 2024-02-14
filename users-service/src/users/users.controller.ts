import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInputDto, UserOutputDto } from './dtos/user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @MessagePattern({ cmd: 'user/add' })
    async addUser(body: UserInputDto): Promise<UserOutputDto> {
        return this.usersService.addUser(body)
    }
    
    @MessagePattern({ cmd: 'user/get' })
    async getUser(id: string): Promise<UserOutputDto> {
        return this.usersService.getUser(id)
    }
}
