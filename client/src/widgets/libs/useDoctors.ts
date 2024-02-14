import { useEffect, useState } from 'react';
import axios from 'axios';

interface Doctor {
    _id: string
    name: string
    spec: string
    slots: string[]
}

export const useDoctors = () => {
    const [loading, setLoading] = useState(true);
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8000/doctors');
            setDoctors(response.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return { doctors, loading };
};