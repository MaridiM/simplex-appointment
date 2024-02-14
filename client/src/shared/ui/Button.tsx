import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    accent: 'primary' | 'ghost';
}

const Button: FC<ButtonProps>= ({ text, accent, onClick, disabled, children,type = 'button', ...props}) => {
    const classes = {
        primary: `${disabled && 'opacity-50 cursor-default'} bg-neutral-900 text-neutral-50 px-6 py-4 rounded-lg hover:bg-neutral-800 transition ease-in-out duration-500`,
        ghost: "px-6 py-4 rounded-lg text-neutral-400 hover:text-neutral-900 border border-neutral-300  hover:border-neutral-500 transition ease-in-out duration-500"
    }
    return (
        <button
            onClick={onClick}
            className={classes[accent]}
            type={type}
            {...props}
        >{text || children }</button>
    )
}

export default Button
