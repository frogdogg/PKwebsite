import Header from '@/react-app/components/Header';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                THE FIRST COLORFUL<br />
                LITTER BOX COVER!
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Private Kitty is a stylish and eco-friendly way to cover your kitty's litter box. 
                Private Kitty is made out of paper, completely recyclable and comes in a styled print design.
              </p>
            </div>
            
            <div className="flex space-x-4">
                <Link to="/order" className="text-white px-6 py-3 rounded-lg transition-colors inline-block text-center" style={{ backgroundColor: '#4f559f' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d4280'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f559f'}>
                  Order Now - $4.99
                </Link>
                <Link to="/about" className="px-6 py-3 rounded-lg transition-colors inline-block text-center" style={{ border: '1px solid #4f559f', color: '#4f559f' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8f9ff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  Learn More
                </Link>
              </div>
            </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-154346.png"
              alt="Private Kitty cover on litter box"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-154400.png"
              alt="Private Kitty cover from different angle"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-155048.png"
              alt="Private Kitty cover installation"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-155057.png"
              alt="Private Kitty cover in home setting"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
