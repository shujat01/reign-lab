import { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Research', href: '#research' },
  { name: 'People', href: '#people' },
  { name: 'Publications', href: '#publications' },
  { name: 'News', href: '#news' },
  { name: 'Resources', href: '#resources' },
  { name: 'Collaborators', href: '#collaborators' }
];

const Navbar = ({ activeSection }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-heading font-bold text-primary">REIGN Lab</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'hover:text-primary'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            aria-label="Toggle mobile menu"
            className="md:hidden text-neutral-800"
            onClick={toggleMobileMenu}
          >
            <HiMenu className="text-2xl" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white pb-4 transition-all duration-300 ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`py-2 font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
