import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <header></header>
      <main>{<Outlet />}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
