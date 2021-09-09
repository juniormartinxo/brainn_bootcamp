import styled from 'styled-components'

const AsideStyle = styled.aside`
  grid-area: sidebar;
  padding: 15px 0px;

  p {
    margin-top: 25px;
  }

  button {
    border-radius: 4px;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
    padding: 15px;
    background-color: #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    border: solid #000000 0;

    &:hover {
      background: #1d1d1d;
      border: solid #000000c2 0;
      border-radius: 4px;
      text-decoration: none;
    }
  }
`

const SidebarContainer = styled.div`
  width: 85%;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px dashed #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;

  &:hover,
  &.checked {
    background-color: #e9e9e9;
    /*color: #fff;*/
    border: 2px dashed #000;
  }
`

export { AsideStyle, SidebarContainer }
