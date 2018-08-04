import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './css/styles.css';
import MealtongApp from './js/components/MealtongApp';

ReactDOM.render(
  <BrowserRouter>
    <MealtongApp />
  </BrowserRouter>,
  document.getElementById('root')
);
