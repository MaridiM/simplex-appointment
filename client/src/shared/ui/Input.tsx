import { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ onChange, id, type, placeholder, autoComplete = 'off', ...props}) => {
  return (
    <input
        className="w-96 p-4 bg-neutral-100 focus:bg-blue-100 rounded-lg border border-neutral-400 border-blue-400 transition ease-in-out duration-500"
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e)}
        required
        {...props}
    />
  )
}

export default Input
