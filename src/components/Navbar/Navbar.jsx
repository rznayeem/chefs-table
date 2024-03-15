import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 my-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[#150B2B] text-3xl font-bold">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[16px] text-[#150B2BB2] space-x-5">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered lg:flex hidden mr-4 items-center gap-2  rounded-full">
            <CiSearch className="h-6 w-6 text-[#150B2BB2]" />
            <input type="search" className="grow" placeholder="Search" />
          </label>

          <a className="btn rounded-full min-h-0 h-auto text-4xl p-2 bg-[#0BE58A]">
            <CgProfile />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
