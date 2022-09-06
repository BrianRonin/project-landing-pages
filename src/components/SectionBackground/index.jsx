import * as S from './styles'
import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'

export const SectionBackground = ({ children, background }) => {
  return (
    <S.Main background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Main>
  )
}

SectionBackground.propTypes = {
  children: P.node,
  background: P.bool,
}
