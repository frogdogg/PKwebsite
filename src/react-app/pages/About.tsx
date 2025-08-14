import Header from '@/react-app/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                THE FIRST COLORFUL<br />
                LITTER BOX COVER!
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Private Kitty is a stylish and eco-friendly way to cover your kitty's litter box. 
                Private Kitty is made out of paper, completely recyclable and comes in a styled print design.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">STANDARD LARGE BOX:</h3>
              <p className="text-gray-700">18" x 14" x 5"</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <img 
                src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-155048.png"
                alt="Product diagram showing litter box cover assembly"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <img 
                src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-154346.png"
                alt="Private Kitty cover in use"
                className="w-full h-24 object-cover rounded"
              />
              <img 
                src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-154400.png"
                alt="Private Kitty cover from side view"
                className="w-full h-24 object-cover rounded"
              />
              <img 
                src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot-2025-08-14-155057.png"
                alt="Private Kitty cover in home setting"
                className="w-full h-24 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
