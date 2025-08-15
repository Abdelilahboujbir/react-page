import { MapPin, Phone, Mail } from 'lucide-react';

export default function ImmobatiFooter() {
  const quickLinks = [
    
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },


  ];

  return (
    <footer className="bg-gradient-to-t from-black/80 to-black/50 border-t-2 border-yellow-500 ">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-500">IMMOBATI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We specialize in premium real estate solutions with personalized service and expert market knowledge.
            </p>
            <div className="pt-2">
              <div className="w-16 h-1 bg-yellow-500 rounded"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-all duration-300 text-sm hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Boulevard Hassan II<br />
                    Casablanca, Morocco 20250
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a 
                  href="tel:+212522123456" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 text-sm"
                >
                  +212 645 563 387
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a 
                  href="mailto:contact@immobati.ma" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 text-sm"
                >
                  contact@immobati.ma
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gray-700/50 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2025 Immobati. <span className="text-yellow-500">Created by Abdelilah</span>
          </p>
        </div>
      </div>
    </footer>
  );
}