import { RouterProvider } from 'react-router-dom';
import { my_router } from './Routes/Routes';

function App() {

  return (
    <div>
        <RouterProvider router={my_router}></RouterProvider>
    </div>
  );
}

export default App;
