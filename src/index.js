import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app.component';
import "bootstrap/dist/css/bootstrap.min.css"

const here = document.getElementById('root')
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,here
);
