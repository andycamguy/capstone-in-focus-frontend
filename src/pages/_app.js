
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';


function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
}
export default MyApp;