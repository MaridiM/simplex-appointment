import { InputGroup, ModalFooter } from "@/features"
import {  ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { Form, useForm } from "../libs/useForm"
import { useDoctors } from "../libs/useDoctors"



interface ModalProps {
    dateTime: string
    showError: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    setShowError: Dispatch<SetStateAction<boolean>>
}


const Modal: FC<ModalProps> = ({ dateTime, showError, setShowError, setShowModal }) => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const { form, setDateTime,  onChange, onSubmit, loading } = useForm()

    useEffect(() => {
        setDisabled(!form.name || !form.phone)
        showError && setTimeout(() => setShowError(false), 5000)
        setDateTime(dateTime)
        !loading && (setShowModal(false))
    }, [form, showError, dateTime, loading])

    return (
        <div className="bg-neutral-800 bg-opacity-25 w-full h-full absolute top-0 flex justify-center z-10 p-10">
            <form className="w-fit h-fit flex justify-center items-center flex-col gap-8 bg-neutral-50 p-14 z-10 blur-none rounded-lg shadow-mg border border-neutral-300">
                <h1 className="text-2xl">Записаться на прием.</h1>
                <span className="text-xl">{dateTime}</span>
                
                <InputGroup
                    onChange={onChange}
                />
                <ModalFooter
                    onSubmit={onSubmit}
                    setShowModal={setShowModal}
                    disabled={disabled}
                />
                    
            </form>
        </div>
    )
}

export default Modal
