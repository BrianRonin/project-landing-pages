import styled, { css } from 'styled-components'

export const Main = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.sizes.large};
  `}
`
