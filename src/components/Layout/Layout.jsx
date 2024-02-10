import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Loading from 'components/Loading/Loading';
import useChangeLanguage from 'hooks/useChangeLanguage';

const Layout = () => {
  const { language } = useParams();

  useChangeLanguage(language);

  if (!['ua', 'en'].includes(language)) {
    return <Navigate to={`/ua`} />;
  }

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
