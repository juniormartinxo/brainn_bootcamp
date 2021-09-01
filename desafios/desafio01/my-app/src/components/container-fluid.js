function ContainerFluid({ children, newClass }) {
  const className = newClass ? `container-fluid ${newClass}` : 'container-fluid'
  return <div className={className}>{children}</div>
}

export default ContainerFluid
