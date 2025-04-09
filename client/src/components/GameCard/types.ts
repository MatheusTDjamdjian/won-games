import { RibbonColors, RibbonSizes } from '../Ribbon'

export type GameCardProps = {
    title: string,
    developer: string,
    img: string,
    price: string,
    promotionalPrice?: string
    favorite?: boolean
    ribbon?: React.ReactNode
    ribbonColor?: RibbonColors
    ribbonSize?: RibbonSizes
    onFav?: () => void
}
  