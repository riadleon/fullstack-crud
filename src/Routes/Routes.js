import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allusers from "../Pages/Allusers/Allusers";
import Home from "../Pages/Home/Home";
import UpdateUsers from "../Pages/UpdateUsers/UpdateUsers";









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
            {
                path: '/updateuser/:id',
                element: <UpdateUsers></UpdateUsers>,
                loader: ({ params }) => fetch(`https://fullstack-crud-server.vercel.app/users/${params.id}`)
            },


        ]
    }
])
export default router;