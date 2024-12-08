import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pages = [
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="bg-transparent flex items-center justify-between px-4 py-3 z-50 relative">
      <div className="sm:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" size={24} />
      </div>

      <div className="hidden sm:flex items-center space-x-7">
        {pages.map((page) => (
          <Link
            key={page[0]}
            to={page[0]}
            className="text-white text-xl hover:bg-indigo-500 transition-colors duration-300 px-2 py-1 rounded"
            activeClassName="font-bold bg-indigo-500"
          >
            {page[1]}
          </Link>
        ))}
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-0 w-full bg-gray-900 z-40">
          {pages.map((page) => (
            <Link
              key={page[0] + " mobile"}
              to={page[0]}
              className="block py-2 px-4 text-gray-300 text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
              activeClassName="font-bold bg-indigo-500 text-white"
              onClick={() => setIsMenuOpen(false)} 
            >
              {page[1]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
