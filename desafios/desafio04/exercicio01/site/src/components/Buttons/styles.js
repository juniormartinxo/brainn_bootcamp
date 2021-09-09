import styled from 'styled-components'

const ButtonContainer = styled.button`
  font-size: 0.85rem;

  &.primary {
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

  &.secondary {
    border-radius: 4px;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
    padding: 15px;
    background-color: #ff3366;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    border: solid #ff3366 0;

    &:hover {
      background: #cf234e;
      border: solid #cf234e 0;
      border-radius: 4px;
      text-decoration: none;
    }
  }

  &.small {
    padding: 5px 8px !important;
    font-size: 0.85rem;
  }
`

export default ButtonContainer
