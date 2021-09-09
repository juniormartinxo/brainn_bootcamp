import styled from 'styled-components'

const ContainerBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 36px auto 100px;
  grid-auto-flow: row;
  grid-template-areas:
    'header'
    'navigation'
    'main'
    'footer';
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`
export default ContainerBox
