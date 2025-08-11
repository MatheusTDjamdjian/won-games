import { RibbonColors, RibbonSizes } from '../Ribbon/types'

export type GameCardProps = {
    slug: string
    title: string
    developer: string
    img: string
    price: string
    promotionalPrice?: string
    favorite?: boolean
    ribbon?: React.ReactNode
    ribbonColor?: RibbonColors
    ribbonSize?: RibbonSizes
    onFav?: () => void
}
  