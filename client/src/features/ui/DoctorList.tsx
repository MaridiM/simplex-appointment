import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ListItem } from '@/shared'

interface Doctor {
    _id: string
    name: string
    spec: string
    slots: string[]
}

interface DoctorListProps {
    data: Doctor[]
    doctorId: { idx: number, id: string }
    setDoctorId: Dispatch<SetStateAction<{ idx: number, id: string }>>
}

const DoctorList: FC<DoctorListProps> = ({ data, doctorId, setDoctorId }) => {
    return (
        <ul className="flex flex-col h-auto w-80 gap-2">
            {
                data.map((doctor, idx) => <ListItem
                        key={doctor._id}
                        type='doctor'
                        onClick={() => setDoctorId({ idx, id: doctor._id }) }
                        active={doctorId.idx === idx}
                    >
                        <span>{doctor.name}</span>
                        <span className="text-neutral-500">{doctor.spec}</span>
                    </ListItem>
                )
            }
        </ul>
    )
}

export default DoctorList
