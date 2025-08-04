import React from 'react'
import GamesTemplate, { GamesTemplateProps } from "@/templates/Games"

import filterItemsMock from '@/components/ExploreSidebar/mock'
import { initializeApollo } from '@/utils/apollo'
import { gql } from '@apollo/client'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

const { data } = await apolloClient.query({
  query: gql`
    query QueryGames {
      games {
        data {
          id
          attributes {
            name
            slug
            price
            cover {
              data {
                attributes {
                  url
                }
              }
            }
            developers {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
})
  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0]?.attributes.name ?? '',
        img: `http://localhost:1337${game.attributes.cover?.data?.attributes?.url ?? ''}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.attributes.price)
      })),
      filterItems: filterItemsMock
    }
  }
}