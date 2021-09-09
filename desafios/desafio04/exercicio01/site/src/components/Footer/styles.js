import styled from 'styled-components'

const FooterContainer = styled.footer`
  grid-area: footer;
  color: #fff;
  background-color: #000000;
  text-align: right;
`

const TitleFooter = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 10px 0;
`

const TextFooter = styled.p`
  font-size: 1rem;
`

const LinkFooter = styled.a`
  color: #ff3366;

  &:hover {
    color: #bd294e;
  }
`

export { FooterContainer, TitleFooter, TextFooter, LinkFooter }
