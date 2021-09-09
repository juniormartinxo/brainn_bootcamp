import { AlertContainer, AlertText } from './styles'

function Alert({ alertStatus, children }) {
  return (
    <AlertContainer className={alertStatus} role='alert'>
      <AlertText>{children}</AlertText>
    </AlertContainer>
  )
}

export default Alert
