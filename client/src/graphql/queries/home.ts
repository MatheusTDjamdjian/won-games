import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'

// GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
    query HomePageData {
      banners {
        ...BannerFragment
      }
      
      newGames: games(
        filters: { release_date: { lte: "2025-08-20" } }
        sort: "release_date:desc"
        pagination: { limit: 8 }
      ) {
        ...GameFragment
      }

      upcomingGames: games(
        filters: { release_date: { lte: "2025-08-20" } }
        sort: "release_date:desc"
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
    }
${BannerFragment}
${GameFragment}
`