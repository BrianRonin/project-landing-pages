import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridImage = ({ background, description, title, grid }) => {
  return (
    <SectionBackground background={background}>
      <S.Main>
        <Heading size='huge' uppercase light={background} as='h2'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <S.Grid>
          {grid.map((element, i) => (
            <S.GridElement key={i}>
              <S.Image src={element.srcImg} alt={element.altText} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Main>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  background: P.bool,
  description: P.string.isRequired,
  title: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
}
