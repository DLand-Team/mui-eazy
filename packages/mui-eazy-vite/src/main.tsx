import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TableDemo from './pages/tableDemo';
import TreeDemo from './pages/treeDemo';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/table',
    element: <TableDemo />,
  },
  {
    path: '/tree',
    element: <TreeDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiLocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'zh-cn'}>
      <RouterProvider router={router} />
    </MuiLocalizationProvider>
  </React.StrictMode>
);
