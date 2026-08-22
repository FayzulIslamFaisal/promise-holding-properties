import { Metadata } from "next";
import AllProjectWrapper from '@/components/projects/AllProjectWrapper'

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore our diverse range of ongoing and completed residential and commercial projects at Promise Assets.",
};


export const dynamic = "force-dynamic";

const ProjectPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const params = await searchParams;
  return (
    <AllProjectWrapper searchParams={params} />
  )
}

export default ProjectPage
