// "HomePageWrapper.tsx"
import Image from "next/image"
import UpcomingProjects from "./UpcomingProjects"

const HomePageWrapper = () => {
    const runningProjectTitle = {
        title: 'Running Projects',
        subTitle: 'Explore our current and upcoming initiatives',
    }
    const upcomingProjectTitle = {
        title: 'Upcoming Projects',
        subTitle: 'Explore our current and upcoming initiatives',
    }
    const completeProjectTitle = {
        title: 'Complete Projects',
        subTitle: 'Explore our current and upcoming initiatives',
    }

    const runningProjects = [
        {
            id: 1,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project1.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 2,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project2.jpg',
            description: 'Modern villas in a serene environment.',
        },
        {
            id: 3,
            name: 'Project 03',
            imageUrl: '/assets/images/projects/project3.jpg',
            description: 'Upcoming business plaza in the downtown area.',
        },
        {
            id: 4,
            name: 'Project 04',
            imageUrl: '/assets/images/projects/project4.jpg',
            description: 'Eco-friendly housing project in the suburbs.',
        },
        {
            id: 5,
            name: 'Project 05',
            imageUrl: '/assets/images/projects/project5.jpeg',
            description: 'Innovative smart homes launching soon.',
        },
        {
            id: 6,
            name: 'Project 06',
            imageUrl: '/assets/images/projects/project6.jpg',
            description: 'A new standard in coastal living.',
        },
        {
            id: 7,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project1.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 8,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project2.jpg',
            description: 'Modern villas in a serene environment.',
        },
    ];
    const upcomingProjects = [
        {
            id: 1,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project13.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 2,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project14.jpg',
            description: 'Modern villas in a serene environment.',
        },
        {
            id: 3,
            name: 'Project 03',
            imageUrl: '/assets/images/projects/project15.jpg',
            description: 'Upcoming business plaza in the downtown area.',
        },
        {
            id: 4,
            name: 'Project 04',
            imageUrl: '/assets/images/projects/project16.jpg',
            description: 'Eco-friendly housing project in the suburbs.',
        },
        {
            id: 5,
            name: 'Project 05',
            imageUrl: '/assets/images/projects/project5.jpeg',
            description: 'Innovative smart homes launching soon.',
        },
        {
            id: 6,
            name: 'Project 06',
            imageUrl: '/assets/images/projects/project6.jpg',
            description: 'A new standard in coastal living.',
        },
        {
            id: 7,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project1.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 8,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project2.jpg',
            description: 'Modern villas in a serene environment.',
        },
    ]
    const completeProjects = [
        {
            id: 1,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project7.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 2,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project8.jpg',
            description: 'Modern villas in a serene environment.',
        },
        {
            id: 3,
            name: 'Project 03',
            imageUrl: '/assets/images/projects/project9.jpg',
            description: 'Upcoming business plaza in the downtown area.',
        },
        {
            id: 4,
            name: 'Project 04',
            imageUrl: '/assets/images/projects/project10.jpg',
            description: 'Eco-friendly housing project in the suburbs.',
        },
        {
            id: 5,
            name: 'Project 05',
            imageUrl: '/assets/images/projects/project11.jpg',
            description: 'Innovative smart homes launching soon.',
        },
        {
            id: 6,
            name: 'Project 06',
            imageUrl: '/assets/images/projects/project12.jpg',
            description: 'A new standard in coastal living.',
        },
        {
            id: 7,
            name: 'Project 01',
            imageUrl: '/assets/images/projects/project1.jpg',
            description: 'Luxury apartments near the city center.',
        },
        {
            id: 8,
            name: 'Project 02',
            imageUrl: '/assets/images/projects/project2.jpg',
            description: 'Modern villas in a serene environment.',
        },
    ]
    
    return (
        <>
            <div className="relative w-full h-[calc(100vh-400px)]">
                <div className="relative w-full h-full overlay-slider">
                    <Image src="/assets/images/slider/propertiest-01.webp" objectFit="cover" fill alt="logo" />
                </div>
            </div>
            <UpcomingProjects sectionTitle={runningProjectTitle} projects={runningProjects}/>
            <UpcomingProjects sectionTitle={upcomingProjectTitle} projects={upcomingProjects}/>
            <UpcomingProjects sectionTitle={completeProjectTitle} projects={completeProjects}/>
        </>
    )
}

export default HomePageWrapper