import { gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"

export const QUERY_GAMES = gql`
  query GamesList($limit: Int!) {
    games(pagination: { limit: $limit }) {
      ...GameFragment
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query GameBySlug($slug: String!) {
  games(filters: { slug: { eq: $slug } }) {
    name
    slug
    short_description
    description
    price
    rating
    release_date
    gallery(pagination: { limit: 9 }) {
      src: url
      label: alternativeText
    }
    cover {
      src: url
    }
    developers {
      name
    }
    publisher {
      name
    }
    categories {
      name
    }
    platforms {
      name
    }
  }
}
`