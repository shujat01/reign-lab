const collaborators = [
  { id: 1, name: 'Partner 1' },
  { id: 2, name: 'Partner 2' },
  { id: 3, name: 'Partner 3' },
];

const fundingSources = [
  {
    id: 1,
    name: 'Council of Scientific and Industrial Research(CSIR)',
    // grantNumber: 'BT/PR12345/MED/31/789/2021'
  },
  {
    id: 2,
    name: 'Indian Council of Medical Research (ICMR)',
  },
  {
    id: 3,
    name: 'Science and Engineering Research Board (SERB)',
  }
];

const Collaborators = () => {
  return (
    <section id="collaborators" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Collaborators & Funding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Collaborators */}
          {/* <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Research Collaborators</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-6 justify-center">
                {collaborators.map((collaborator) => (
                  <div 
                    key={collaborator.id}
                    className="w-32 h-20 bg-neutral-200 rounded flex items-center justify-center"
                  >
                    {collaborator.name}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          
          {/* Funding Sources */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Funding Sources</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {fundingSources.map((source) => (
                  <li key={source.id} className="flex items-start">
                    <i className="fas fa-award text-primary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">{source.name}</p>
                      {/* <p className="text-sm text-neutral-600">Grant: {source.grantNumber}</p> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Diversity Statement */}
        <div className="bg-primary text-white p-6 rounded-lg">
          <h3 className="text-xl font-heading font-semibold mb-4">Equity, Diversity and Inclusion</h3>
          <p>
            Hypoxia-related studies are the center of our research, and both male and female researchers contribute to the laboratory. 
            We respect and honor the diversity in our community that includes but is not limited to race, ethnicity, national origin, 
            gender identity, gender expression, sexual orientation, age, disability, socio-economic status, class, and religion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
