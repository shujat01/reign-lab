import { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

interface ResearchCardProps {
  title: string;
  fullDescription: string;
  imageUrl: string;
  link: string;
}

const ResearchCard = ({ title, fullDescription, imageUrl, link }: ResearchCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="bg-neutral-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      {/* ✅ Image at the top */}
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>

        <div
          id="description"
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            expanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <p className="mt-4 mb-6 whitespace-pre-line text-neutral-600 border-l-4 border-primary-light pl-4">
            {fullDescription}
          </p>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          className="text-primary font-medium hover:text-primary-light transition-colors inline-flex items-center mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md px-2 py-1"
          aria-expanded={expanded}
          aria-controls="description"
        >
          {expanded ? (
            <>Show less <HiChevronUp className="ml-1" /></>
          ) : (
            <>Learn more <HiChevronDown className="ml-1" /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;
