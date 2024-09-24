import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './component/Home';
import { Video } from './component/Video';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path:"/room/:id",
      element:<Video/>
    }
  ])

  return (
   <div className='app'>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
