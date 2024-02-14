import axios, { AxiosRequestConfig } from "axios";
import { ChangeEvent, useEffect, useMemo, useState } from "react";


export interface Form {
    phone: string
    name: string
}

export const useForm = () => {
    const [loading, setLoading] = useState(true);
    const [dateTime, setDateTime] = useState<string>('')
    const [form, setForm] = useState<Form>({
        phone: '',
        name: '',
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(state => ({
            ...state,
            phone: e.target.name === 'phone' ? e.target.value : state.phone, 
            name: e.target.name === 'name' ?  e.target.value : state.name
        }))
    }
    const onSubmit = async () => {
        const doctorId = localStorage.getItem('doctor_id') ?? ''
        try {
            setLoading(true); 
            const response = await axios.post('http://localhost:8000/appointments/create', { 
                phone: form.phone,
                name: form.name,
                slot: dateTime,
                doctor_id: doctorId,
            });

            setLoading(false); 

        } catch (error) {
            console.error('Ошибка создания записи:', error);
        }
    }

    return { form, dateTime, loading, setDateTime, onChange, onSubmit };
};