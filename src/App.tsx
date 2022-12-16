import React from 'react';
import { Routes, Route } from 'react-router-dom';

const LazyHomeComponent = React.lazy(() => import('./modules/Home'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LazyHomeComponent />} />
    </Routes>
  );
}

export default AppRoutes;
