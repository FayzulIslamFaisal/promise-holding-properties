import MediaCenterContentCard from "./MediaCenterContentCard";
interface Newsletter {
  id: string
  title: string
  date: string
  coverImage: string
  tags: string
  slug?: string
}

const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Architectural Excellence & Sustainable Development",
    date: "July 2025",
    coverImage: "/assets/images/projects/project1.jpg",
    tags: "Architecture",
    slug: "architectural-excellence-sustainable-development",
  },
  {
    id: "2",
    title: "Premium Residential Projects & Market Insights",
    date: "June 2025",
    coverImage: "/assets/images/projects/project2.jpg",
    tags: "Real Estate",
    slug: "premium-residential-projects-market-insights",
  },
  {
    id: "3",
    title: "Interior Design Trends & Luxury Living Spaces",
    date: "May 2025",
    coverImage: "/assets/images/projects/project3.jpg",
    tags: "Interior Design",
    slug: "interior-design-trends-luxury-living-spaces",
  },
  {
    id: "4",
    title: "Urban Planning & Community Development",
    date: "April 2025",
    coverImage: "/assets/images/projects/project4.jpg",
    tags: "Urban Planning",
    slug: "urban-planning-community-development",
  },
  {
    id: "5",
    title: "Smart Homes: Technology Meets Comfort",
    date: "March 2025",
    coverImage: "/assets/images/projects/project5.jpeg",
    tags: "Technology",
    slug: "smart-homes-technology-meets-comfort",
  },
  {
    id: "6",
    title: "The Future of Green Architecture",
    date: "February 2025",
    coverImage: "/assets/images/projects/project6.jpg",
    tags: "Sustainability",
    slug: "future-green-architecture",
  },
  {
    id: "7",
    title: "Commercial Real Estate: Trends to Watch",
    date: "January 2025",
    coverImage: "/assets/images/projects/project7.jpg",
    tags: "Commercial",
    slug: "commercial-real-estate-trends-watch",
  },
  {
    id: "8",
    title: "Luxury Condominiums: Redefining Urban Living",
    date: "December 2024",
    coverImage: "/assets/images/projects/project8.jpg",
    tags: "Luxury",
    slug: "luxury-condominiums-redefining-urban-living",
  },
  {
    id: "9",
    title: "Revolutionizing Construction with AI & Robotics",
    date: "November 2024",
    coverImage: "/assets/images/projects/project9.jpg",
    tags: "Innovation",
    slug: "revolutionizing-construction-ai-robotics",
  },
  {
    id: "10",
    title: "Cultural Spaces: Blending Art & Architecture",
    date: "October 2024",
    coverImage: "/assets/images/projects/project10.jpg",
    tags: "Art & Culture",
    slug: "cultural-spaces-blending-art-architecture",
  },
  {
    id: "11",
    title: "Affordable Housing Solutions for All",
    date: "September 2024",
    coverImage: "/assets/images/projects/project11.jpg",
    tags: "Social Impact",
    slug: "affordable-housing-solutions-for-all",
  },
  {
    id: "12",
    title: "Landscape Architecture in Urban Settings",
    date: "August 2024",
    coverImage: "/assets/images/projects/project12.jpg",
    tags: "Landscape",
    slug: "landscape-architecture-urban-settings",
  },
  {
    id: "13",
    title: "Reviving Heritage Buildings with Modern Touch",
    date: "July 2024",
    coverImage: "/assets/images/projects/project13.jpg",
    tags: "Heritage",
    slug: "reviving-heritage-buildings-modern-touch",
  },
  {
    id: "14",
    title: "Minimalist Home Design Principles",
    date: "June 2024",
    coverImage: "/assets/images/projects/project14.jpg",
    tags: "Minimalism",
    slug: "minimalist-home-design-principles",
  },
  {
    id: "15",
    title: "Future-Proof Cities: Resilient Infrastructure",
    date: "May 2024",
    coverImage: "/assets/images/projects/project15.jpg",
    tags: "Infrastructure",
    slug: "future-proof-cities-resilient-infrastructure",
  },
  {
    id: "16",
    title: "Public Spaces That Bring People Together",
    date: "April 2024",
    coverImage: "/assets/images/projects/project16.jpg",
    tags: "Public Space",
    slug: "public-spaces-bring-people-together",
  },
];

const MediaCenterContent = () => {
  return (
    <section className=" px-4 dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]" >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sectionSpaceBorder">
          {newsletters.map((newsletter) => (
            <MediaCenterContentCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaCenterContent
