import { IconType } from 'react-icons';
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLink[];
}

// Map to convert icon strings to actual React Icon components
const iconMap: Record<string, IconType> = {
  'twitter': FaTwitter,
  'linkedin': FaLinkedin,
  'github': FaGithub,
  'website': FaGlobe,
  'email': FaEnvelope
};

const TeamMemberCard = ({ name, role, image, socialLinks }: TeamMemberCardProps) => {
  // Get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    // Extract the platform name from the icon class if it's in format like "fab fa-twitter"
    const platformName = iconName.includes('fa-') 
      ? iconName.split('fa-')[1] 
      : iconName;
      
    return iconMap[platformName] || FaGlobe;
  };
  
  return (
    <div className="person-card bg-white rounded-lg shadow-md overflow-hidden relative group cursor-pointer">
      <div 
        className="h-64 bg-primary-light relative" 
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="person-details absolute inset-0 bg-primary bg-opacity-90 p-4 flex flex-col justify-center items-center text-white">
          <h4 className="text-xl font-heading font-semibold mb-2">{name}</h4>
          <p className="text-sm mb-3">{role}</p>
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => {
              const IconComponent = getIconComponent(link.icon);
              return (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-white hover:text-accent transition-colors"
                  aria-label={link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="text-xl" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-heading font-semibold">{name}</h4>
      </div>
    </div>
  );
};

export default TeamMemberCard;
