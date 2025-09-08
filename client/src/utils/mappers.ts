import { Query_HomeQuery } from '@/graphql/generated'

type GameFromQuery = NonNullable<Query_HomeQuery['newGames']>[number]
type SectionsType = NonNullable<Query_HomeQuery['sections']>
type PopularSectionType = NonNullable<SectionsType['popularGames']>
type HighlightFromQuery = PopularSectionType['highlight']

export type MappedBanner = {
  img: string
  title?: string | null
  subtitle?: string | null
  buttonLabel?: string | null
  buttonLink?: string | null
  ribbon?: string | null
  ribbonColor?: string | null
  ribbonSize?: string | null
}

export type MappedGame = {
  title: string
  slug: string | null
  developer: string
  img: string
  price: number
}

export type MappedHighlight = {
  id: string
  title: string
  subtitle: string
  backgroundImage: string
  floatImage: string | null
  buttonLabel: string
  buttonLink: string
  alignment: string | null
}

export const bannerMapper = (
  banners: Query_HomeQuery['banners'] | null | undefined
): MappedBanner[] => {
  if (!banners) return []

  return banners
    .filter((b): b is NonNullable<typeof b> => b !== null)
    .map((banner) => ({
      img: banner.image?.url ? `${banner.image.url}` : '',
      title: banner.title ?? null,
      subtitle: banner.subtitle ?? null,
      buttonLabel: banner.button?.label ?? null,
      buttonLink: banner.button?.link ?? null,
      ribbon: banner.ribbon?.text ?? null,
      ribbonColor: banner.ribbon?.color ?? null,
      ribbonSize: banner.ribbon?.size ?? null
    }))
}


export const gamesMapper = (
  games: Array<GameFromQuery | null> | null | undefined
): MappedGame[] => {
  if (!games) return []

  return games
    .filter((g): g is NonNullable<typeof g> => g !== null) // 👈 type guard
    .map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers?.[0]?.name ?? '',
      img: game.cover?.url ? `${game.cover.url}` : '',
      price: game.price
    }))
}

export const highlightMapper = (
  highlight: HighlightFromQuery | null | undefined
): MappedHighlight | null => {
  if (!highlight) return null

  const id = highlight.id ?? String(Math.random())

  return {
    id,
    title: highlight.title,
    subtitle: highlight.subtitle,
    backgroundImage: highlight.background?.url ? `${highlight.background.url}` : '',
    floatImage: highlight.floatImage?.url ? `${highlight.floatImage.url}` : null,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: highlight.alignment ?? null
  }
}