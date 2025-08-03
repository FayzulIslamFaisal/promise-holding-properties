import RelatedProjectCard from "./RelatedProjectCard"

interface RelatedProject {
  id: string
  title: string
  date: string
  coverImage: string
  tags: string
}

const relatedProjects: RelatedProject[] = [
  {
    id: "1",
    title: "Architectural Excellence & Sustainable Development",
    date: "July 2025",
    coverImage: "/assets/images/projects/project1.jpg",
    tags: "Architecture",
  },
  {
    id: "2",
    title: "Premium Residential Projects & Market Insights",
    date: "June 2025",
    coverImage: "/assets/images/projects/project2.jpg",
    tags: "Real Estate",
  },
  {
    id: "3",
    title: "Interior Design Trends & Luxury Living Spaces",
    date: "May 2025",
    coverImage: "/assets/images/projects/project3.jpg",
    tags: "Interior Design",
  },
  {
    id: "4",
    title: "Urban Planning & Community Development",
    date: "April 2025",
    coverImage: "/assets/images/projects/project4.jpg",
    tags: "Urban Planning",
  },
  {
    id: "5",
    title: "Smart Homes: Technology Meets Comfort",
    date: "March 2025",
    coverImage: "/assets/images/projects/project5.jpeg",
    tags: "Technology",
  },
  {
    id: "6",
    title: "The Future of Green Architecture",
    date: "February 2025",
    coverImage: "/assets/images/projects/project6.jpg",
    tags: "Sustainability",
  },
  {
    id: "7",
    title: "Commercial Real Estate: Trends to Watch",
    date: "January 2025",
    coverImage: "/assets/images/projects/project7.jpg",
    tags: "Commercial",
  },
  {
    id: "8",
    title: "Luxury Condominiums: Redefining Urban Living",
    date: "December 2024",
    coverImage: "/assets/images/projects/project8.jpg",
    tags: "Luxury",
  },
  {
    id: "9",
    title: "Revolutionizing Construction with AI & Robotics",
    date: "November 2024",
    coverImage: "/assets/images/projects/project9.jpg",
    tags: "Innovation",
  },
  {
    id: "10",
    title: "Cultural Spaces: Blending Art & Architecture",
    date: "October 2024",
    coverImage: "/assets/images/projects/project10.jpg",
    tags: "Art & Culture",
  },
  {
    id: "11",
    title: "Affordable Housing Solutions for All",
    date: "September 2024",
    coverImage: "/assets/images/projects/project11.jpg",
    tags: "Social Impact",
  },
  {
    id: "12",
    title: "Landscape Architecture in Urban Settings",
    date: "August 2024",
    coverImage: "/assets/images/projects/project12.jpg",
    tags: "Landscape",
  },
  {
    id: "13",
    title: "Reviving Heritage Buildings with Modern Touch",
    date: "July 2024",
    coverImage: "/assets/images/projects/project13.jpg",
    tags: "Heritage",
  },
  {
    id: "14",
    title: "Minimalist Home Design Principles",
    date: "June 2024",
    coverImage: "/assets/images/projects/project14.jpg",
    tags: "Minimalism",
  },
  {
    id: "15",
    title: "Future-Proof Cities: Resilient Infrastructure",
    date: "May 2024",
    coverImage: "/assets/images/projects/project15.jpg",
    tags: "Infrastructure",
  },
  {
    id: "16",
    title: "Public Spaces That Bring People Together",
    date: "April 2024",
    coverImage: "/assets/images/projects/project16.jpg",
    tags: "Public Space",
  },
];
const RelatedProjectContent = () => {
  return (
    <section className=" px-4 dark:bg-[var(--custom-bg-body)] bg-[var(--custom-bg-white)]" >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10 md:py-14 border-b border-[var(--custom-bg-accent)]/40">
          {relatedProjects.map((relatedProject) => (
            <RelatedProjectCard key={relatedProject.id} relatedProject={relatedProject} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProjectContent
