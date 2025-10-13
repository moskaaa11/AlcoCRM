// main
import {PATH} from './PATH'
import { createBrowserRouter } from 'react-router-dom'
// pages
import App from '../App'
import ErrorPage from '../components/Pages/ErrorPage'
import Home from '../components/Pages/Home'
import Budget from '../components/Pages/Budget'
import Settings from '../components/Pages/Settings'
import Finance from '../components/Pages/Finance'
import Recipe from '../components/Pages/Recipe'
import Storage from '../components/Pages/Storage'
import Statistic from '../components/Pages/Statistic'
import Processing from '../components/Pages/Processing'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: PATH.Home,
                element: <Home/>
            },{
                path: PATH.Budget,
                element: <Budget/>
            },{
                path: PATH.Settings,
                element: <Settings/>
            },{
                path: PATH.Finance,
                element: <Finance/>
            },{
                path: PATH.Recipe,
                element: <Recipe/>
            },{
                path: PATH.Storage,
                element: <Storage/>
            },{
                path: PATH.Statistic,
                element: <Statistic/>
            },{
                path: PATH.Processing,
                element: <Processing/>
            }
        ]
    }
])

export default router;