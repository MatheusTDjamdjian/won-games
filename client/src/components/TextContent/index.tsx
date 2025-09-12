import React from 'react'
import * as S from './styles'

import Heading from '../Heading'
import { TextContentProps } from './types'

const TextContent = ({ title, content }: TextContentProps) => {
  const optimizedContent = content
  ? content.replace(/<img /g, '<img loading="lazy" ')
  : ''

  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: optimizedContent }} />
    </S.Wrapper>
  )
}

export default TextContent