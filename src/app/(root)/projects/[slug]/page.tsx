

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='container mx-auto px-4'>Project Page: {params?.slug}</div>
  )
}

export default ProjectPage