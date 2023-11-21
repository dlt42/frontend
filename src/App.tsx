import React from 'react';

import { ErrorBoundary } from './ui/components';
import { useError } from './ui/hooks/useError/useError';
import HomePage from './ui/pages/Home';

export const App = () => {
  const { handleError } = useError();
  return (
    <ErrorBoundary
      handleError={handleError}
      currentError={null}
      boundaryLocation='AppWrapper'
      throwUnhandled={false}
    >
      <HomePage />
    </ErrorBoundary>
  );
};

export default App;
