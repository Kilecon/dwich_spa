import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
{/*import Home from './Homepage';*/}
import Register from './Register';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);