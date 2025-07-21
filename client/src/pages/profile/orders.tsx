import React from 'react'

import Heading from "@/components/Heading"
import ProfileMenu from "@/components/ProfileMenu"
import Base from "@/templates/Base"
import { Container } from "@/components/Container"

import * as S from '../../templates/Profile/styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile