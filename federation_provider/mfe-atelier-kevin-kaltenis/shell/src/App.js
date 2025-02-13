import React from 'react';

// Import the remote module
const Header = React.lazy(() => import('header/Header'));

function App() {
  return (
    <div>
      <React.Suspense fallback="Loading Header...">
        <Header />
      </React.Suspense>
      <h1>Welcome to the Shell Application</h1>
    </div>
  );
}

export default App;
