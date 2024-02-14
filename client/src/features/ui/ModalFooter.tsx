import { Button } from '@/shared'
import { Dispatch, SetStateAction } from 'react'
import { FC } from 'react';

interface ModalFooterProps {
    disabled: boolean
    onSubmit: () => void
    setShowModal: Dispatch<SetStateAction<boolean>>
}

const ModalFooter: FC<ModalFooterProps> = ({ disabled, onSubmit, setShowModal }) => {
    return (
        <footer className="flex justify-between w-full">
            <Button
                accent="primary"
                text="Записаться"
                onClick={() => !disabled && onSubmit()}
                disabled={disabled}
            />
            <Button
                accent="ghost"
                text="Отменить"
                onClick={() => setShowModal(false)}
                disabled={disabled}
            />
        </footer>
    )
}

export default ModalFooter
    