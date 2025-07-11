import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import ButtonPage from './01_pages/button-page';
import DialogPage from './01_pages/dialog-page';
import InputPage from './01_pages/input-page';
import ReactSelectPage from './01_pages/react-select-page';
import MainLayout from './02_layouts/main-layout';

const App = () => {
  const routes = [
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/button" replace />,
        },
        {
          path: 'button',
          element: <ButtonPage />,
        },
        {
          path: 'input',
          element: <InputPage />,
        },
        {
          path: 'react-select',
          element: <ReactSelectPage />,
        },
        {
          path: 'dialog',
          element: <DialogPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
