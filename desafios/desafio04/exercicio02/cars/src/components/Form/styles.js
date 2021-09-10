import styled from 'styled-components'

const TitleForm = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

const Row = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const InputContainerColS12 = styled.div`
  margin-bottom: 15px;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  margin-bottom: 15px;
`

const InputContainerColS6 = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
  width: 50%;
  margin-left: auto;
  left: auto;
  right: auto;
  margin-bottom: 15px;
`

const InputContainerColS4 = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
  width: 33.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
  margin-bottom: 15px;
`

const ButtonGravar = styled.button`
  text-decoration: none;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  font-size: 14px;
  outline: 0;
  background-color: #ff3366;
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  outline: 0;

  &:hover {
    background-color: #d10f40;
  }
`

const InputCar = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: border 0.3s, -webkit-box-shadow 0.3s;
  transition: border 0.3s, -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s, border 0.3s;
  transition: box-shadow 0.3s, border 0.3s, -webkit-box-shadow 0.3s;

  &:focus {
    border-bottom: 1px solid #f44336;
    -webkit-box-shadow: 0 1px 0 0 #f44336;
    box-shadow: 0 1px 0 0 #f44336;
  }
`

const InputCarColor = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`

export {
  TitleForm,
  Row,
  InputContainerColS4,
  InputContainerColS6,
  InputContainerColS12,
  ButtonGravar,
  InputCar,
  InputCarColor,
}
