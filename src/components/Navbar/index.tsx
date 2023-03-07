import React from 'react';

import Image from 'next/image';
import NavItem from './NavItem';

function Navbar() {
  return (
    <div className="flex h-nav px-4 py-2 bg-primary w-full items-center justify-between h fixed top-0">
      <Image src="svg/logo.svg" alt="logo" width={200} height={36} />
      <NavItem />
    </div>
  );
}

export default Navbar;
