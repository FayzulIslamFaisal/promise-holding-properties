// app/project-details/[slug]/page.tsx

import ProjectDetailWrapper from "@/components/project-details/ProjectDetailWrapper";
interface SlugProps {
  params: { slug: string; }
}
const ProjectDetailsPage = async({
  params,
}: {
  params: Promise<SlugProps['params']>
}) => {
  const { slug } = await params;
  return <>
    <ProjectDetailWrapper slug={slug} />
  </>
}
export default ProjectDetailsPage