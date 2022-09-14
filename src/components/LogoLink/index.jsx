import * as S from './styles'
import P from 'prop-types'
import { Heading } from '../Heading'

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size='small' uppercase>
      <S.Main href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Main>
    </Heading>
  )
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
}
