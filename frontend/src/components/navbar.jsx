import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Mood Log', path: '/mood' },
    { name: 'Habits', path: '/habits' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <ul className="flex gap-6 font-medium">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:underline ${
                location.pathname === link.path ? 'underline' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
