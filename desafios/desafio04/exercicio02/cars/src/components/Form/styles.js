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

export {
  TitleForm,
  Row,
  InputContainerColS4,
  InputContainerColS6,
  InputContainerColS12,
  ButtonGravar,
}
