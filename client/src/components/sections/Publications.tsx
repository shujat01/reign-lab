import PublicationItem from '../ui/PublicationItem';
import { publications } from '@/data/publicationsData';

const Publications = () => {
  return (
    <section id="publications" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Publications</h2>
        
        <div className="mb-8 text-center">
          <a 
            href="https://scholar.google.co.in/citations?user=WWeXX48AAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent px-6 py-3 rounded-md font-medium text-neutral-800 hover:bg-accent-light transition-colors"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            View all publications on Google Scholar
          </a>
        </div>
        
        <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-heading font-semibold mb-6">Recent Publications</h3>
          
          <ul className="space-y-6">
            {publications.map((publication) => (
              <PublicationItem 
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                tags={publication.tags}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
