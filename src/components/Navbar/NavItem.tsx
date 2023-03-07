import Link from 'next/link';

const NavItem = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Past Socials</Link>
        </li>
        <li>
          <Link href="/">Club</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
