import * as S from './styles'
import P from 'prop-types'

export const MenuLink = ({ children, Link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <S.Main href={Link} target={target}>
      {children}
    </S.Main>
  )
}

MenuLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  )
}
