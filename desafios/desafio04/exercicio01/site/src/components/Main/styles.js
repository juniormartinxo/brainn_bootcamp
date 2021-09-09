import styled from 'styled-components'

const MainContainer = styled.main`
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
export default MainContainer
