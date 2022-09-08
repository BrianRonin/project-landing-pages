import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridTwoColumn = ({
  children,
  title,
  text,
  background,
  srcImg,
}) => {
  return (
    <SectionBackground background={background}>
      <S.Main>
        <S.TextContainer>
          <Heading uppercase light={background} as='h2'>
            {title}
          </Heading>
          <Text>{text}</Text>
        </S.TextContainer>
        <S.ImageContainer>
          <S.Img src={srcImg} alt={title} />
        </S.ImageContainer>
      </S.Main>
    </SectionBackground>
  )
}

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
}
