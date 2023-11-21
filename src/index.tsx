import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ErrorProvider } from './ui/context/errorContext/errorProvider';

const root = createRoot(document.getElementById(`root`) as HTMLElement);

root.render(
  <ErrorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorProvider>
);
