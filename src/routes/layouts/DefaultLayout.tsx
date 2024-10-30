import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <main className="h-screen flex items-center justify-center">
        {<Outlet />}
      </main>
    </>
  );
};

export default DefaultLayout;
