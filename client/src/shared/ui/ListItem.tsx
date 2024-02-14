import { FC, ReactNode } from "react"

interface dateTimeItemProps {
    type: 'time' | 'date' | 'doctor'
    children: ReactNode, 
    active: boolean
    reserved?: boolean,
    onClick: () => void
}

const dateTimeItem: FC<dateTimeItemProps> = ({type, onClick, children, reserved, active }) => {
    const classes = {
        time: 'h-14 w-4/12 flex justify-center items-center border hover:border-neutral-400 shadow-mg rounded-lg hover:shadow-lg cursor-default transition ease-in-out duration-500',
        date: 'h-14 w-full flex justify-center items-center hover:bg-amber-100 border hover:border-neutral-400 shadow-mg rounded-lg hover:shadow-lg cursor-default transition ease-in-out duration-500',
        doctor: 'flex flex-row justify-center items-center h-20 full hover:bg-amber-100 gap-3 border hover:border-neutral-400 shadow-mg rounded-lg hover:shadow-lg cursor-default transition ease-in-out duration-500'
    }
    return (
        <li
            onClick={onClick}
            className={`${!reserved ? `${active ? 'bg-amber-100 border-amber-400' : 'bg-neutral-50'} hover:bg-amber-100` : 'bg-sky-100 border-sky-500 hover:border-sky-500' } ${classes[type]}`}
        >
            { children }
        </li>
    )
}

export default dateTimeItem;
