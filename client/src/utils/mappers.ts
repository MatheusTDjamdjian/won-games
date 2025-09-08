import {
  BannerFragmentFragment,
  GameFragmentFragment,
  HighlightFragmentFragment
} from '@/graphql/generated'

export const bannerMapper = (banners: Array<BannerFragmentFragment | null> | null | undefined) => {
  return (
    banners?.filter((banner): banner is BannerFragmentFragment => banner !== null)
      .map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })) ?? []
  )
}

export const gamesMapper = (games: Array<GameFragmentFragment | null> | null | undefined) => {
  return (
    games?.filter((game): game is GameFragmentFragment => game !== null)
      .map((game) => ({
        title: game.name,
        slug: game.slug ?? '',
        developer: game.developers?.[0]?.name ?? '',
        img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '/images/fallback-bg.jpg',
        price: game.price ?? 0
      })) ?? []
  )
}

export const highlightMapper = (
  highlight: HighlightFragmentFragment | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImage: highlight.floatImage?.url
        ? `http://localhost:1337${highlight.floatImage.url}`
        : undefined,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}