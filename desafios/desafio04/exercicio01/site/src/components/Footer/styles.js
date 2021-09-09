import styled from 'styled-components'

const FooterContainer = styled.footer`
  grid-area: footer;
  color: #fff;
  background-color: #000000;
  text-align: right;

  a {
    color: #ff3366;
    &:hover {
      color: #bd294e;
    }
  }

  p {
    margin-top: 15px;
  }
`

export default FooterContainer
