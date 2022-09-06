import * as S from './styles'
import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'

export const Menu = ({ Links = [], LogoData = {} }) => {
  return (
    <S.Main>
      <SectionContainer>
        <S.MenuContainer>
          <LogoLink {...LogoData} />
          <NavLinks Links={Links} />
        </S.MenuContainer>
      </SectionContainer>
    </S.Main>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  LogoData: P.shape(LogoLink.propTypes).isRequired,
  children: P.node,
}
