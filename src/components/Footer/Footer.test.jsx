import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { Footer } from './index'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>teste</h1>'} />)
    expect(screen.getByRole('heading', { name: 'teste' })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
