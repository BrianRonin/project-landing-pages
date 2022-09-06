import * as S from './styles'
import P from 'prop-types'
import { Heading } from '../Heading'

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size='small' uppercase>
      <S.Main href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </S.Main>
    </Heading>
  )
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired,
}
