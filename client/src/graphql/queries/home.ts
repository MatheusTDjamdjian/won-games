import { gql } from '@apollo/client';
import { BannerFragment } from '../fragments/banner';
import { GameFragment } from '../fragments/game';
import { HighlightFragment } from '../fragments/highlight';

export const QUERY_HOME = gql`
  query QUERY_HOME {
    banners {
      ...BannerFragment
    }

    newGames: games(
      filters: { release_date: { lte: "2024-04-20" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      filters: { release_date: { gte: "2024-04-20" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    freeGames: games(
      filters: { price: { lte: 1 } }
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`