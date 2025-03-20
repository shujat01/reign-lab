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

const TeamMemberCard = ({ name, role, image, socialLinks }: TeamMemberCardProps) => {
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
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-white hover:text-accent transition-colors"
                aria-label={link.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
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
