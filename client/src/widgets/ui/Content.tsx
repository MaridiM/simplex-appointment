import { DateTimeList, DoctorList } from '@/features'
import { useDoctors } from '@/widgets/libs/useDoctors'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { data } from '../api/date'

interface DateTime {
    idx: number
    value: string
}

interface DateTimeProps {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    setShowError: Dispatch<SetStateAction<boolean>>
    setDateTime: Dispatch<SetStateAction<string>>
}

const DateTime: FC<DateTimeProps> = ({ showModal, setShowModal, setShowError, setDateTime }) => {
    const [changeTime, setChangeTime] = useState<DateTime | null>(null)
    const [changeDate, setChangeDate] = useState<DateTime>({ idx: 0, value: data.dates[0] })
    
    const { doctors, loading } = useDoctors(); 
    const [ doctorId, setDoctorId] = useState<{ idx:number, id:string }>({ idx: 0, id: '' })
    
    const checkReservedTime = (time: string, date: string): boolean => {
        if (!doctors.length || doctorId.idx === -1) return false;
        return doctors[doctorId.idx].slots.some((slot) => slot.includes(time) && slot.includes(date));
    };

    useEffect(() => {
        setDateTime(`${changeDate.value} ${changeTime && changeTime.value}`)
        localStorage.setItem('doctor_id', doctorId.id ? doctorId.id : (doctors && doctors[0] !== undefined) ? doctors[0]._id : '')  
    }, [doctorId, doctors, changeTime, changeDate])

    return (
        <div className={`flex gap-4 z-0 ${showModal && 'blur-sm'}`}>
            {
                loading ? (<p>Loading doctors...</p>) : (
                <>
                    {
                        doctors.length > 0
                            ? <DoctorList data={doctors} doctorId={doctorId} setDoctorId={setDoctorId} /> 
                            : <p>No doctors found.</p>
                    }

                    <div className="flex w-auto gap-4">
                        <DateTimeList
                            type="date"
                            changeTime={changeTime}
                            changeDate={changeDate}
                            setChangeDate={setChangeDate}
                            setChangeTime={setChangeTime}
                            setShowModal={setShowModal}
                            setShowError={setShowError}
                            checkReservedTime={checkReservedTime}
                        />
                        <DateTimeList
                            type="time"
                            changeTime={changeTime}
                            changeDate={changeDate}
                            setChangeDate={setChangeDate}
                            setChangeTime={setChangeTime}
                            setShowModal={setShowModal}
                            setShowError={setShowError}
                            checkReservedTime={checkReservedTime}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default DateTime
