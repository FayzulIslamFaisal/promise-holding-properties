import { InsightCard } from './InsightCard';

const insightsData = [
  {
    id: '1',
    title: '5 Reasons Families Are Choosing Premium Residential Communities',
    category: 'Blog',
    date: 'April 2025',
    image: "/assets/images/projects/project2.jpg",
    excerpt: 'Discover why modern families are increasingly attracted to premium residential communities that offer luxury amenities, security, and lifestyle benefits.',
    readTime: '5 min read',
    views: 2840,
    featured: true,
  },
  {
    id: '2',
    title: 'Grand Opening Ceremony of Our Latest Development Project',
    category: 'Events',
    date: 'April 2025',
    image: "/assets/images/projects/project3.jpg",
    excerpt: 'Join us as we celebrate the opening of our newest luxury development with special offers and exclusive previews.',
    readTime: '3 min read',
    views: 1560,
  },
  {
    id: '3',
    title: 'Best Luxury Apartments in Premium Locations',
    category: 'Property',
    date: 'March 2025',
    image: "/assets/images/projects/project4.jpg",
    excerpt: 'Explore our curated selection of luxury apartments featuring world-class amenities and prime locations.',
    readTime: '7 min read',
    views: 3200,
  },
  {
    id: '4',
    title: 'Successful Handover Ceremony for Phase 1 Residents',
    category: 'Events',
    date: 'March 2025',
    image: "/assets/images/projects/project6.jpg",
    excerpt: 'Celebrating the successful completion and handover of keys to our valued residents in the first phase.',
    readTime: '4 min read',
    views: 980,
  },
];

export const InsightsSection: React.FC = () => {
 
  return (
    <section className="py-14 ">
      <div className="container mx-auto px-4">
        <div className="mb-6 lg:mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--custom-text-white)]">
                INSIGHTS
            </h2>
        </div>
        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}>
          {insightsData.map((insight, index) => (
            <div
              key={insight.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <InsightCard {...insight} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};