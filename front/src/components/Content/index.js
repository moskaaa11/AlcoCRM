
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

const Content = () => {
  return (
    <div >
        <NavBar/>
        <main >
            <Outlet/>
        </main>
    </div>
  )
}

export default Content