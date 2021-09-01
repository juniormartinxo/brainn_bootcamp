import { H2 } from './title'
import Button from './button'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <H2>Sidebar</H2>
      <p>Nós estamos na lateral do site</p>

      <p>
        <Button kind='primary'>Este é um botão primário</Button>
      </p>
    </aside>
  )
}

export default Sidebar
