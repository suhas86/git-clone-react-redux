import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Repos from './pages/Repos.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:userName/repos',
    element: <Repos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="min-h-screen flex  justify-center bg-gray-100">
        <div className="w-full max-w-screen-lg m-4 p-4 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 tracking-wider uppercase">
            GitHub Finder
          </h1>
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  </React.StrictMode>
);
