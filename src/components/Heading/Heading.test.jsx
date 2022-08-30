import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  it('should render with default values', () => {
    const { debug } = renderTheme(<Heading>testando</Heading>)
    debug()

    const heading = screen.getByRole('heading', { name: 'testando' })
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.sizes.xlarge,
      'text-transform': 'none',
    })
  })
  it('should render with white color', () => {
    renderTheme(<Heading light={true}>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    })
  })
  it('should render correct render sizes', () => {
    renderTheme(<Heading size='small'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'font-size': '59px',
    })
  })
})
