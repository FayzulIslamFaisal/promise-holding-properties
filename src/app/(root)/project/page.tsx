import { Metadata } from "next";
import AllProjectWrapper from '@/components/projects/AllProjectWrapper'

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore our diverse range of ongoing and completed residential and commercial projects at Promise Holding Properties.",
};


export const dynamic = "force-dynamic";

const ProjectPage = () => {
  return (
    <AllProjectWrapper />
  )
}

export default ProjectPage
