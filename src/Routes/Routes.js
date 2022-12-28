import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import AddTask from "../components/AddTask/AddTask";
import MyTask from "../components/MyTask/MyTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Starred from "../components/Starred/Starred";

export const my_router = createBrowserRouter([
    {   path:'/', 
        element: <Main></Main>, 
        children: [
            {path: '/', element: <AddTask></AddTask>},
            {path: 'add-task', element: <AddTask></AddTask>},
            {path: 'my-task', element: <MyTask></MyTask>},
            {path: 'completed-task', element: <CompletedTask></CompletedTask>},
            {path: 'starred', element: <Starred></Starred>},

            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    }
])