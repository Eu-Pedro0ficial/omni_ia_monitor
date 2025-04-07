import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import router from './routes';

import '../styles/index.css';

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
