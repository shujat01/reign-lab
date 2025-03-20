import { newsEvents } from '@/data/newsData';

const News = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">News & Events</h2>
        
        <div className="space-y-8">
          {newsEvents.map((yearGroup) => (
            <div key={yearGroup.year} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white text-xl font-bold px-4 py-2 rounded mr-4">
                  {yearGroup.year}
                </div>
                <h3 className="text-xl font-heading font-semibold">{yearGroup.title}</h3>
              </div>
              <ul className="space-y-3 pl-4">
                {yearGroup.events.map((event, index) => (
                  <li key={index} className="flex items-start">
                    <i className={`${event.icon} text-accent mt-1 mr-3`}></i>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
