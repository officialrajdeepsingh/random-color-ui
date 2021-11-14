import Head from './head';
import Footer from './Footer';
import { useState } from 'react';

// https://freeicons.io/filter/popular/all/all/navbar%20menu?page=5
function Layout({ children }) {
  const [open, setClose] = useState(false);

  function hardbarger() {
    setClose(true);
  }
  function onclose() {
    setClose(false);
  }
  return (
    <>
      <Head />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
