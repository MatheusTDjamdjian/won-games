import React from "react"

import Game, { GameTemplateProps } from "@/templates/Game"

import galleryMock from '@/components/Gallery/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const descriptionHTML = `
    <img src="/img/cyberpunk/cyberpunk77.png"><br>
    * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
    <hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="/img/cyberpunk/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
    <br><br><img alt="" src="/img/cyberpunk/EN-Mercenary-Outlaw.png"><br><br>
    Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
    <br><br><img alt="" src="/img/cyberpunk/EN-City-of-the-Future.png"><br><br>
    Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
    <br><br><img alt="" src="/img/cyberpunk/EN-Eternal-Life.png"><br><br>
    Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


    <p class="description__copyrights">
    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
    CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
    respective owners.
  </p>`

  return {
    props: {
      cover:
        '/img/cyberpunk/bg77.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: {
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10T23:00:00',
        platforms: ['windows'],
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing']
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    },
    revalidate: 60
  }
}