interface PublicationItemProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
  link?: string; // 👈 Optional link property
}

const PublicationItem = ({ title, authors, journal, year, tags, link }: PublicationItemProps) => {
  return (
    <li className="border-b border-neutral-200 pb-4 last:border-0">
      <p className="font-medium mb-2">
        {authors} ({year}). "{title}" <span className="italic">{journal}</span>.
        {link && (
          <>
            {" "}
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              View article →
            </a>
          </>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-secondary text-white text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
};

export default PublicationItem;
