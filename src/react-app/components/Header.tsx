import { Link, useLocation } from 'react-router';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="text-white" style={{ background: 'linear-gradient(to right, #4f559f, #3d4280)' }}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img 
                src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot_2025-08-14_155530-removeb.png"
                alt="PrivateKitty Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white opacity-90">
              <Link to="/">PrivateKitty</Link>
            </h1>
          </div>
          
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-white hover:opacity-80 transition-colors ${
                isActive('/') ? 'text-white font-medium' : 'text-white opacity-70'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-white hover:opacity-80 transition-colors ${
                isActive('/about') ? 'text-white font-medium' : 'text-white opacity-70'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/order" 
              className={`hover:text-white hover:opacity-80 transition-colors ${
                isActive('/order') ? 'text-white font-medium' : 'text-white opacity-70'
              }`}
            >
              ORDER
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-white hover:opacity-80 transition-colors ${
                isActive('/contact') ? 'text-white font-medium' : 'text-white opacity-70'
              }`}
            >
              CONTACT
            </Link>
          </nav>
        </nav>
      </div>
    </header>
  );
}
