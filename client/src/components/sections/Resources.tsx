const resources = [
  {
    id: 1,
    icon: 'fas fa-flask',
    title: 'Lab Protocols',
    description: 'Standardized protocols for hypoxia experiments and genomics analysis.',
    link: '#',
    linkText: 'Access protocols'
  },
  {
    id: 2,
    icon: 'fas fa-database',
    title: 'Datasets',
    description: 'Public datasets and resources related to hypoxia research.',
    link: '#',
    linkText: 'Browse datasets'
  },
  {
    id: 3,
    icon: 'fas fa-book',
    title: 'Educational Materials',
    description: 'Learning resources for students and researchers in hypoxia biology.',
    link: '#',
    linkText: 'View materials'
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-neutral-100 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className={resource.icon}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{resource.title}</h3>
              <p className="mb-4">{resource.description}</p>
              <a 
                href={resource.link} 
                className="text-primary font-medium hover:text-primary-light transition-colors"
              >
                {resource.linkText} <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
