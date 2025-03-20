import { HiArrowRight } from 'react-icons/hi';

interface ResearchCardProps {
  title: string;
  description: string;
  bgColor: string;
  link: string;
}

const ResearchCard = ({ title, description, bgColor, link }: ResearchCardProps) => {
  return (
    <div className="bg-neutral-100 rounded-lg shadow-md overflow-hidden">
      <div className={`h-48 ${bgColor}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
        <p className="text-neutral-800 mb-4">{description}</p>
        <a 
          href={link} 
          className="text-primary font-medium hover:text-primary-light transition-colors inline-flex items-center"
        >
          Learn more <HiArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ResearchCard;
