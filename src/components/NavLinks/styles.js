import styled, { css } from 'styled-components'
export const Main = styled.div`
  ${({ theme }) => css`
    background: #fff;
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.medium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`
