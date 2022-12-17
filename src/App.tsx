import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LazyHomeComponent = React.lazy(() => import('./modules/Home/Home'));
const LazyCharacterComponent = React.lazy(() => import('./modules/Character/Character'));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LazyHomeComponent />} />
        <Route path='/character' element={<Suspense fallback={<p>Loading...</p>}><LazyCharacterComponent /></Suspense>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
