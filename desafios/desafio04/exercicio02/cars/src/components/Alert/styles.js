import styled from 'styled-component'

const AlertContainer = styled.div`
  width: 600px;
  left: 50%;
  margin-left: -300px;
  top: 10px;
  background-color: #ff3366;
  position: absolute;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;

  &.hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
`

const AlertText = styled.p`
  font-size: 1.2rem;
`

export { AlertText, AlertContainer }
