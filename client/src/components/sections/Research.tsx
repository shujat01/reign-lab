import ResearchCard from '../ui/ResearchCard';
import { researchAreas } from '../../data/researchData';

const Research = () => {
  return (
    <section id="research" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Research Areas</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {researchAreas.map((area) => (
            <ResearchCard
              key={area.id}
              title={area.title}
              fullDescription={area.fullDescription}
              imageUrl={area.image}  
              link={area.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
