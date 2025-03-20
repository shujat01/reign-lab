import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">REIGN Lab</h4>
            <p className="mb-4">REsearch in Integrative GeNomics of hypoxia</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Email">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">Department of Molecular Biology</p>
              <p className="mb-2">Institute of Biomedical Sciences</p>
              <p className="mb-2">New Delhi, India</p>
              <p>
                <a 
                  href="mailto:contact@reignlab.org" 
                  className="hover:text-accent transition-colors"
                >
                  contact@reignlab.org
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#research" className="hover:text-accent transition-colors">
                  Research Areas
                </a>
              </li>
              <li>
                <a href="#people" className="hover:text-accent transition-colors">
                  People
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-accent transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-accent transition-colors">
                  News & Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-700 text-center">
          <p>&copy; {new Date().getFullYear()} REIGN Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
