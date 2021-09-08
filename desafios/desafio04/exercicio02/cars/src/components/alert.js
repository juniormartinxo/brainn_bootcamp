function Alert({ alertStatus, children }) {
  return (
    <div className={'alert ' + alertStatus} role='alert'>
      <p>{children}</p>
    </div>
  )
}

export default Alert
