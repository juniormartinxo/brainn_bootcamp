import styled from 'styled-components'

const TableStyle = styled.table`
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 15px;
  margin-bottom: 15px;
`

const THead = styled.thead`
  background-color: #000000;
  color: #ffffff;
`

const TRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const THCenter = styled.th`
  text-align: center;
  padding: 15px 5px;
  display: table-cell;
  vertical-align: middle;
  border: none;
  border-radius: 0 !important;
  font-weight: bold;
`

const TDCenter = styled.td`
  text-align: center;
  padding: 15px 5px;
  display: table-cell;
  vertical-align: middle;
  border-radius: 2px;
  border: none;
`

const TBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
`

const BoxColor = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  text-align: center;
`

const ImgCar = styled.img`
  height: 48px;
  text-align: center;
`

const ButtonDeleteCar = styled.button`
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
  TableStyle,
  THead,
  TRow,
  THCenter,
  TBody,
  TDCenter,
  BoxColor,
  ImgCar,
  ButtonDeleteCar,
}
