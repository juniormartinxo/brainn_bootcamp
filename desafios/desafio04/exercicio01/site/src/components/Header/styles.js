import styled from 'styled-components'

const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #fcfafa;

  h1 {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    margin-top: 0 !important;
  }
`

export default HeaderContainer
