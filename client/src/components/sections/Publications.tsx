import PublicationItem from '../ui/PublicationItem';
import { researchArticles, bookChapters, abstracts } from '@/data/publicationsData';

const Publications = () => {
  return (
    <section id="publications" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Publications</h2>

        <div className="mb-8 text-center">
          <a href="https://scholar.google.co.in/citations?user=WWeXX48AAAAJ&hl=en" className="inline-flex items-center bg-accent px-6 py-3 rounded-md font-medium text-neutral-800 hover:bg-accent-light transition-colors" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt mr-2"></i>
            View all publications on Google Scholar
          </a>
        </div>

        <div className="mb-8 text-center">
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=aastha+mishra" className="inline-flex items-center bg-accent px-6 py-3 rounded-md font-medium text-neutral-800 hover:bg-accent-light transition-colors" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt mr-2"></i>
            View all publications on PubMed
          </a>
        </div>

        <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-heading font-semibold mb-6">Research Articles</h3>
          <ul className="space-y-6">
            {researchArticles.map((publication) => (
              <PublicationItem key={publication.id} {...publication} />
            ))}
          </ul>

          <h3 className="text-xl font-heading font-semibold mt-12 mb-6">Book Chapters</h3>
          <ul className="space-y-4 list-none">
            {bookChapters.map((chapter, index) => (
              <li key={index}>
                <p>
                  <strong>{chapter.authors}</strong>. {chapter.title}. <em>{chapter.book}</em>. {chapter.publisher}, {chapter.year}.{' '}
                  {chapter.url && (
                    <a href={chapter.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Link</a>
                  )}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-heading font-semibold mt-12 mb-6">Published Abstracts in Conferences</h3>
          <ul className="space-y-4 list-none">
            {abstracts.map((abstract, index) => (
              <li key={index}>
                <p>
                  <strong>{abstract.authors}</strong>. {abstract.title}. <em>{abstract.journal}</em>.{' '}
                  {abstract.url && (
                    <a href={abstract.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">DOI</a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
