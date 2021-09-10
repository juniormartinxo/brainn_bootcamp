import styled from 'styled-components'

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

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
`

const AlertText = styled.p`
  font-size: 1rem;
  padding: 15px 5px;
`

export { AlertText, AlertContainer }
