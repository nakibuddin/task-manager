import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { my_router } from './Routes/Routes';

function App() {

  return (
    <div>
        <RouterProvider router={my_router}></RouterProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
