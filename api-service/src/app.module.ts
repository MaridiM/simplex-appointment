import { Module } from '@nestjs/common';
import { AppointmentsModule } from './appointments/appointments.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
    imports: [AppointmentsModule, DoctorsModule]
})
export class AppModule {}
