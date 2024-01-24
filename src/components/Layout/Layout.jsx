import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Loading from 'components/Loading/Loading';

const Layout = () => {
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
