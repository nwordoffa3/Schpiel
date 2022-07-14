import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "schpiel.us.auth0.com";
const clientId = "HEZ6MqqjRYaphziQ6j1jzAapr1X5ze0W";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={"https://nwordoffa3.github.io/Schpiel/callback"}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
