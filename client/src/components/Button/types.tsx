import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  $minimal?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

type ButtonTypes = 
| AnchorHTMLAttributes<HTMLAnchorElement> 
| ButtonHTMLAttributes<HTMLButtonElement>