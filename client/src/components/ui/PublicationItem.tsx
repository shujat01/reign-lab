interface PublicationItemProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
}

const PublicationItem = ({ title, authors, journal, year, tags }: PublicationItemProps) => {
  return (
    <li className="border-b border-neutral-200 pb-4 last:border-0">
      <p className="font-medium mb-2">
        {authors} ({year}). "{title}" <span className="italic">{journal}</span>.
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
