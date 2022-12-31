import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import AddTask from "../components/AddTask/AddTask";
import MyTask from "../components/MyTask/MyTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Starred from "../components/Starred/Starred";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import EditTask from './../components/EditTask/EditTask';

export const my_router = createBrowserRouter([
    {   path:'/', 
        element: <Main></Main>, 
        children: [
            { path: '/', element: <AddTask></AddTask> },
            { path: '/add-task', element: <AddTask></AddTask> },
            { path: 'my-task', element: <MyTask></MyTask> },
            { path: '/completed-task', element: <CompletedTask></CompletedTask> },
            { path: '/login', element: <Login></Login>},
            { path: '/register', element: <Register></Register>},
            { 
                path: '/edit-task/:id', 
                element: <EditTask></EditTask>,
                loader: async ({params}) => await fetch(`http://localhost:5000/edit-task/${params.id}`)  
            },
            {
                path: '/starred', 
                element: <Starred></Starred>,
                loader: async () => await fetch('http://localhost:5000/star')
            },

            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    }
])