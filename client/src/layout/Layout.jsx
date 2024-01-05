import { Outlet } from 'react-router-dom';
import { PageWrapper } from './PageWrapper';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Navigation />
    </>
  );
};
