/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { Provider } from 'react-redux';

// Use consistent styling
// import 'sanitize.css/sanitize.css';

// Import root app
import { HelmetProvider } from 'react-helmet-async';

// Initialize languages
import './locales/i18n';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from './store/configureStore';
import { App } from 'app';
require('dotenv').config();

const store: any = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

// Sentry.init({
//   dsn: 'https://2b4bf9770cf14db9a0433f80299a6224@o1152841.ingest.sentry.io/6231269',
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}
