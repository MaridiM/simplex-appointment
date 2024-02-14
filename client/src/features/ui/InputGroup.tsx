import { Input } from '@/shared'
import { ChangeEvent, FC } from 'react';

interface InputGroupProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const InputGroup: FC<InputGroupProps> = ({ onChange }) => {
    return (
        <div className="flex flex-col gap-4">
            <Input
                type="text"
                id="name"
                placeholder="Ваше Имя"
                onChange={onChange}
            />
            <Input
                type="phone"
                id="phone"
                placeholder="Ваш номер телефона"
                onChange={onChange}
            />
        </div>
    )
}

export default InputGroup
    