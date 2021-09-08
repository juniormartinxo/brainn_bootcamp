function Alert({ children, statusAlert }) {
  return (
    <div className={'alert ' + statusAlert} role='alert'>
      {children}
    </div>
  )
}

export default Alert
