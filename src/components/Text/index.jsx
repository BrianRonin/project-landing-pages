import * as S from './styles'
import P from 'prop-types'

export const Text = ({ children, isHtml = false }) => {
  if (isHtml) {
    return <S.Main dangerouslySetInnerHTML={{ __html: children }} />
  } else {
    return <S.Main>{children}</S.Main>
  }
}

Text.propTypes = {
  children: P.node,
}
