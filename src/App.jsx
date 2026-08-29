import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SomaProfile from './pages/Maintenance';
import './index.css';

const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Admin"
          element={
            <Suspense fallback={<main aria-live="polite">Loading…</main>}>
              <Admin />
            </Suspense>
          }
        />
        <Route path="*" element={<SomaProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
