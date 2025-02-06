// artist-hub/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM.render
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element.');
}

const root = createRoot(rootElement); // Create a root using the root element
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
