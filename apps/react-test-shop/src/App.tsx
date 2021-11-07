import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '@react-test-shop-nx/ui-core';
import { HomePage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
