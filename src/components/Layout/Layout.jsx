import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
