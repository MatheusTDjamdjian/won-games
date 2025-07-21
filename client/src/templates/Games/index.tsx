import React from 'react'
import * as S from './styles'

import Base from '../Base'
import { KeyboardArrowDown as ArrowDown } from 'styled-icons/material-outlined'

import ExploreSidebar from '@/components/ExploreSidebar'
import { ItemProps } from '@/components/ExploreSidebar/types'
import GameCard from '@/components/GameCard'
import { GameCardProps } from '@/components/GameCard/types'
import { Grid } from '@/components/Grid'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate