import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
 
import {GameCardProps} from "../GameCard/types"
import GameCardSlider from '.'
 
  const items = [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-gratis/bela-foto-aerea-de-uma-praia-com-colinas-ao-fundo-ao-por-do-sol_181624-24143.jpg?t=st=1744659112~exp=1744662712~hmac=ae1d6de8e12eb68f6d21915d59292ecd60041703c9f99a9f04c0582e3fdcd03b&w=996',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-gratis/por-do-sol-da-misurina_181624-34793.jpg?t=st=1744659307~exp=1744662907~hmac=369f16349fc7ec01119879f82d28791c839828d612666c5205507dd155b40d90&w=996',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-gratis/cachoeira-na-natureza-tailandia_335224-989.jpg?t=st=1744659279~exp=1744662879~hmac=7df4ec28dd27e86eb8020cee72eecfc2943f55ce9177a2693a4082898364cfae&w=996',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-gratis/belas-paisagens-de-formacoes-rochosas-a-beira-mar-em-queens-bath-kauai-havai-ao-por-do-sol_181624-36857.jpg?t=st=1744659340~exp=1744662940~hmac=30d3e9a682af80cf45b18673a538638bcb696bcb287211003961129c10ff0338&w=996',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-premium/mt-fuji-sobre-o-lago-kawaguchiko-com-folha-do-outono-no-nascer-do-sol-em-fujikawaguchiko-japao_29505-845.jpg?w=996',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://img.freepik.com/fotos-gratis/montanhas-vestrahorn-em-stokksnes-islandia_335224-667.jpg?t=st=1744659390~exp=1744662990~hmac=8907910d7dc1e6592052a600fa1702f886709f01808d3491a8fc4bc316cdc0c2&w=1380',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ]
 
  export default {
    title: 'GameCardSlider',
    component: GameCardSlider,
    args: { items },
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
          default: 'won-dark'
        }
    }
  } as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={[args]} {...args} />
    </div>
  )
};