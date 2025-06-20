import React from 'react'
import * as S from './styles'

import Heading from '../Heading'
import { TextContentProps } from './types'

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent