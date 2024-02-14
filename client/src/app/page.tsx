'use client'

import { Content, Modal } from "@/widgets";
import { ErrorLine } from "@/shared";
import { useState } from "react";

export default function Home() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showError, setShowError] = useState<boolean>(false)
    const [dateTime, setDateTime] = useState<string>('')

    return (
        <main className="flex min-h-screen flex-col items-center p-10 bg-neutral-200 gap-4">
            {
                showModal && <Modal
                    dateTime={dateTime}
                    setShowModal={setShowModal}
                    showError={showError}
                    setShowError={setShowError}
                />
            }
            {
                showError && <ErrorLine text={`Запись на ${dateTime} невозможна!`} />
            }
            <Content 
                showModal={showModal}
                setShowModal={setShowModal}
                setShowError={setShowError}
                setDateTime={setDateTime} 
            />
        </main>
    );
}
