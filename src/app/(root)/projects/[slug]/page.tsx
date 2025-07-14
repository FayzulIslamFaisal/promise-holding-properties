import ProjectDetailsWrapp from "@/components/projectDetails/ProjectDetailsWrapp";

interface ProjectSlug {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params }: ProjectSlug) => {
  return (
    <ProjectDetailsWrapp slug={params.slug} />
  );
};

export default ProjectPage;