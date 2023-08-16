import React from 'react';
import ReactDOM from 'react-dom/client';
//import axios from 'axios';
import Header from './headercomp';

import Bodycomp from './body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header></Header>
  <Bodycomp></Bodycomp>
  </React.StrictMode>
);