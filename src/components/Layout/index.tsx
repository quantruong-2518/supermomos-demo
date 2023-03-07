import React from 'react';
import Navbar from '../Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="m-nav flex flex-col items-center p-4 bg-page h-content overflow-auto">
        {children}
      </main>
    </>
  );
}

export default Layout;
