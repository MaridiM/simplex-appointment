import { FC } from 'react'

interface ErrorLineProps {
    text: string
}

const ErrorLine: FC<ErrorLineProps> = ({ text }) => <span className="text-rose-600 absolute top-2">{ text }</span>

export default ErrorLine
