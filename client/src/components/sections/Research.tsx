import ResearchCard from '../ui/ResearchCard';

const researchAreas = [
  {
    id: 1,
    title: 'Physiological genomics of hypoxia',
    description: 'Integrative multi-omics to understand hypoxia response in health and disease.',
    bgColor: 'bg-primary',
    link: '#'
  },
  {
    id: 2,
    title: 'Modelling hypoxia under experimental conditions',
    description: 'There is a growing recognition that intermittent or continuous hypoxia can be beneficial. However, translational aspects of these findings pose challenges as the response to hypoxia is complex.',
    bgColor: 'bg-primary-light',
    link: '#'
  },
  {
    id: 3,
    title: 'Genetic landscape for cardiovascular disorders',
    description: 'Investigating genetic factors that contribute to cardiovascular disorders and their relation to hypoxic conditions.',
    bgColor: 'bg-primary-dark',
    link: '#'
  }
];

const Research = () => {
  return (
    <section id="research" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Research Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <ResearchCard
              key={area.id}
              title={area.title}
              description={area.description}
              bgColor={area.bgColor}
              link={area.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
