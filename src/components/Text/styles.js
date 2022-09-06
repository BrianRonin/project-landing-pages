import styled, { css } from 'styled-components'
export const Main = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
  `}
`
