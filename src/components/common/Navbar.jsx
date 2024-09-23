import { Link } from "react-router-dom";

function Navbar({activeMenu}) {
  const HOME_MENU_INDEX = 1;
  const ABOUT_MENU_INDEX = 2;
  const BLOG_MENU_INDEX = 3;
  const FAQ_MENU_INDEX = 4;

  const ACTIVE_BUTTON_CLASS = 'rounded btn-active btn-ghost'

  return (
    <div className="navbar bg-base-100 fixed top-0 z-10">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className={activeMenu == HOME_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={activeMenu == ABOUT_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>About</a>
                </li>
                <li className={activeMenu == BLOG_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>Blog</a>
                </li>
                <li className={activeMenu == FAQ_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>FAQ</a>
                </li>
            </ul>
            </div>
            <img className="w-10 h-10" src="/public/title-icon.png" alt="" />
            <a className="btn btn-ghost text-xl">Reader's Cafe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li className={activeMenu == HOME_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={activeMenu == ABOUT_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>About</a>
                </li>
                <li className={activeMenu == BLOG_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>Blog</a>
                </li>
                <li className={activeMenu == FAQ_MENU_INDEX ? ACTIVE_BUTTON_CLASS : ''}>
                    <a>FAQ</a>
                </li>
            </ul>
        </div>
        <div className="navbar-end gap-x-2">
            <Link className="btn" to={'booklist'}>Buy Book</Link>
            <a className="btn">Sign In</a>
        </div>
    </div>
  )
}

export default Navbar
