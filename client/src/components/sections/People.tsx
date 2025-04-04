import TeamMemberCard from '../ui/TeamMemberCard';
import { currentMembers, Trainee, Alumni } from '@/data/teamData';

const People = () => {
  return (
    <section id="people" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Our Team</h2>
        
        {/* Current Members */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center md:text-left">Current Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentMembers.map((member) => (
              <TeamMemberCard 
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>

        <div>
              <h4 className="text-xl font-heading font-semibold mb-4">Trainee</h4>
              <ul className="space-y-2 bg-white p-6 rounded-lg shadow-sm">
                {Trainee.map((alumnus) => (
                  <li key={alumnus.id} className="flex items-center">
                    <i className="fas fa-user-graduate text-primary mr-3"></i>
                    <span>{alumnus.name}</span>
                  </li>
                ))}
              </ul>
            </div>
        
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4">Alumni</h4>
              <ul className="space-y-2 bg-white p-6 rounded-lg shadow-sm">
                {Alumni.map((alumnus) => (
                  <li key={alumnus.id} className="flex items-center">
                    <i className="fas fa-user-graduate text-primary mr-3"></i>
                    <span>{alumnus.name}</span>
                  </li>
                ))}
              </ul>
            </div>
        
      </div>
    </section>
  );
};

export default People;
