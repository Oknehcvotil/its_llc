import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from 'components/Loading/Loading';
import useChangeLanguage from 'hooks/useChangeLanguage';

const Layout = () => {
  const { language } = useParams();

  useChangeLanguage(language);

  if (!['ua', 'en'].includes(language)) {
    return <Navigate to="/ua" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
