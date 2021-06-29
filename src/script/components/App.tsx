import * as React from 'react';

const HomeComponent = React.lazy(() => import('./Home'));

export const App: React.FC = () => {
  return (
    <React.Suspense fallback={Loader()}>
      <HomeComponent />
    </React.Suspense>
  );
};

const Loader = () => {
  return <p>Loading...</p>;
};
