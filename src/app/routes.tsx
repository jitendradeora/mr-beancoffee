import { createBrowserRouter } from 'react-router';
import { RootLayout } from './RootLayout';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Checkout } from './pages/Checkout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: ProductList },
      { path: 'products/:id', Component: ProductDetails },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'checkout', Component: Checkout },
    ],
  },
]);
