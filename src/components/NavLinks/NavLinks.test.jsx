import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'
import { NavLinks } from './index'
import { MockNavLinks } from './mock'

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks Links={MockNavLinks} />)
    expect(screen.getAllByRole('link')).toHaveLength(MockNavLinks.length)
  })
  it('should not render links', () => {
    renderTheme(<NavLinks />)
    expect(screen.queryAllByText(/links/i)).toHaveLength(0)
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks Links={MockNavLinks} />)
    expect(container).toMatchSnapshot()
  })
})
describe('<NavLinks /> mobile', () => {
  it('should have flex column', () => {
    renderTheme(<NavLinks Links={MockNavLinks} />)
    expect(screen.getByText('Link 10').parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      { media: theme.media.medium },
    )
  })
})
