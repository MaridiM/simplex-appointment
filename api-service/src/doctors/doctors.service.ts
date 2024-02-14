import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Doctor } from './types';

@Injectable()
export class DoctorsService {
    constructor(@Inject('USER') private  readonly appointmentClient: ClientProxy) {}

    async getDoctors (): Promise<Doctor[]> {
        try {
            const data = await firstValueFrom(this.appointmentClient.send({ cmd: 'doctors' }, {}));
            return data
        } catch (error) {
            console.error('Ошибка при получении записей:', error);
        }
    }
}
