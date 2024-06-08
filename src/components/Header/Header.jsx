import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className="py-3 shadow-md bg-gradient-to-b from-purple-400 to-blue-700">
      <Container>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              onClick={() => console.log('Menu clicked')}
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  fill-rule="evenodd"
                  d="M20 3H0V1h20v2zM0 10h20v-2H0v2zm0 7h20v-2H0v2z"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <ul className="flex flex-wrap items-center justify-end space-x-4">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className="inline-block px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div>
              {authStatus && (
                <LogoutBtn />
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
