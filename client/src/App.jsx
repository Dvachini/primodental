import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Landing from './pages/LandingPage';
const NotFound = lazy(() => import('./not-found/NotFound'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
