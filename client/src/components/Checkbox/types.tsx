import { InputHTMLAttributes } from "react"

export type CheckboxProps = {
    onCheck?: (status: boolean) => void
    isChecked?: boolean
    label?: string
    labelFor?: string
    $labelColor?: 'white' | 'black'
    value?: string | readonly string[] | number | undefined
} & InputHTMLAttributes<HTMLInputElement>
