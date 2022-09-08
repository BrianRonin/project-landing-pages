import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { Main as Container } from '../SectionContainer/styles'

const isMenuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`

export const Main = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background-color: white;


    @media ${theme.media.medium} {
      height: 100vh;
      opacity: 0;
      visibility: hidden;
      ${!!visible && isMenuVisible(theme)}
      ${Container} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Title} {
        padding-bottom: ${theme.sizes.large};
        display: flex;
        justify-content: center;
        margin: 0;
      }
    }
  `}
`
export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.medium} {
      justify-content: center;
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`
export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.primaryColor}
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${ visible ? 'none' : 'all'};
    @media ${theme.media.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
