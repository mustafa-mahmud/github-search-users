import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//domain:: dev-p7k--yzs.us.auth0.com
//client id:: mdMhOzIqMpX0JBOP4LOFRT04NT9Ghygz

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-p7k--yzs.us.auth0.com"
    clientId="mdMhOzIqMpX0JBOP4LOFRT04NT9Ghygz"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
