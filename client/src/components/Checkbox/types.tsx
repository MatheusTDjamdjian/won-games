import { InputHTMLAttributes } from "react"

export type CheckboxProps = {
    onCheck?: (status: boolean) => void
    label?: string
    labelFor?: string
    labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>
