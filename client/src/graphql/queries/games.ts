import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'

export const QUERY_GAMES = gql`
  query GamesList($limit: Int!) {
    games(pagination: { limit: $limit }) {
      ...GameFragment
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query GameBySlugQuery($slug: String!) {
  games(filters: { slug: { eq: $slug } }) {
    ...GameFragment
  }
}
${GameFragment}
`