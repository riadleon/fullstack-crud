import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allusers from "../Pages/Allusers/Allusers";
import Home from "../Pages/Home/Home";









const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allusers',
                element: <Allusers></Allusers>,
            },


        ]
    }
])
export default router;