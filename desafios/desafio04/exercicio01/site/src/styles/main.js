import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 25px;
  grid-auto-flow: row;
  grid-template-areas: 'sidebar content';
  grid-area: main;
  margin: 0 auto;
  width: 90%;
`
const SidebarContainer = styled.div`
  grid-area: sidebar;
  padding: 15px 0px;
`

const ContentContainer = styled.div`
  grid-area: content;
  padding: 15px 0px;
`
const FooterContainer = styled.div`
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

const ContainerFluidStyle = styled.div`
  margin: 0 auto;
  width: 90%;
`
