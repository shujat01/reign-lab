import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TeamMemberCard from '../ui/TeamMemberCard';
import { currentMembers, Trainee, Alumni } from '@/data/teamData';

const People = () => {
  return (
    <section id="people" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Our Team</h2>
        
{/* Project Investigator */}
<div className="mb-16">
  <h3 className="text-2xl font-heading font-semibold mb-6 text-center md:text-left">Project Investigator</h3>
  <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md">
    <img 
      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
      alt="Aastha Mishra"
      className="w-40 h-40 rounded-full object-cover"
    />
    <div>
      <h4 className="text-xl font-semibold">Dr. Aastha Mishra</h4>
      <p className="text-sm text-gray-600 mb-4">Research Scientist & Project Investigator</p>
      <p className="text-gray-700 leading-relaxed">
        Dr. Aastha Mishra leads the research vision of our team with a strong focus on translational bioinformatics,
        molecular biology, and precision medicine. Her role as a Project Investigator drives the lab's strategic direction, 
        collaborations, and high-impact scientific outcomes.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedin size={20} /></a>
        <a href="#" className="text-red-500 hover:text-red-700"><FaEnvelope size={20} /></a>
        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
      </div>
    </div>
  </div>
</div>



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
              <h4 className="text-xl font-heading font-semibold mb-4">Current Trainee</h4>
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
