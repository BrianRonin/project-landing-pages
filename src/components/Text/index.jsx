import * as S from './styles'
import P from 'prop-types'

export const Text = ({ children }) => {
  return <S.Main>{children}</S.Main>
}

Text.propTypes = {
  children: P.node,
}
