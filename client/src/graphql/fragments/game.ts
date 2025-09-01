import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    price
    short_description
    description
    rating
    release_date
    cover {
      url
    }
    gallery {
      url
      name
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
`