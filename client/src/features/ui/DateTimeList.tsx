import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { ListItem } from '@/shared'
import { data } from '@/widgets/api/date'

interface DateTime {
    idx: number
    value: string
}

interface DateTimeListProps {
    type: 'time' | 'date'
    checkReservedTime: (time: string, date: string) => boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    setShowError: Dispatch<SetStateAction<boolean>>
    changeTime: DateTime | null
    changeDate: DateTime
    setChangeDate: Dispatch<SetStateAction<DateTime>>
    setChangeTime: Dispatch<SetStateAction<DateTime | null>>
}

const DateTimeList: FC<DateTimeListProps> = ({ type, changeTime, changeDate, setChangeDate, setChangeTime, checkReservedTime, setShowModal, setShowError }) => {
    const classes = {
        time: "h-fit w-80 bg-neutral-0 flex flex-wrap items-center justify-start",
        date: "w-32 bg-neutral-0 flex flex-col gap-1"
    }

    const active = {
        time: (idx:number) => changeTime ? changeTime.idx === idx : false,
        date: (idx:number) => changeDate ? changeDate.idx === idx : false
    }
    
    return (
        <ul className={classes[type]}>
            { 
                data[`${type}s`].map((item, idx) => <ListItem
                        key={idx}
                        type={type}
                        onClick={type === 'date'
                            ? () => setChangeDate({ idx, value: item }) 
                            : () => {(
                                setChangeTime({ idx, value: item }),
                                !checkReservedTime(item, changeDate.value) && setShowModal(true),
                                checkReservedTime(item, changeDate.value) && setShowError(true)
                            )}
                        }
                        active={active[type](idx)}
                        reserved={type === 'time' ? checkReservedTime(item, changeDate.value) : undefined}
                    >{ item }</ListItem>
                )
            }
        </ul>
    )
}

export default DateTimeList
