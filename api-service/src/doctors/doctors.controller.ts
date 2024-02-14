import { Controller, Get } from '@nestjs/common';
import { Doctor } from './types';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
    constructor(private  readonly doctorsService: DoctorsService) {}

    @Get()
    async getDoctors (): Promise<Doctor[]> {
        return this.doctorsService.getDoctors();
    }
}
