import { useRouter } from 'next/router'
import React from 'react'
import * as S from './styles'

import Heading from "@/components/Heading"
import ProfileMenu from "@/components/ProfileMenu"
import Base from "@/templates/Base"
import { Container } from "@/components/Container"

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile