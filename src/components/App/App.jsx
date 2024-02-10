import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useTranslation } from 'react-i18next';
import { lazy, useEffect } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('companyName');
  }, [i18n.language, t]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/ua`} />} />
      <Route path="/:language" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/ua" />} />
    </Routes>
  );
};

export default App;
