import SecondaryBanner from "@/components/common/SecondaryBanner"
import ProjectTabViews from "@/components/home-page/ProjectTabViews"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const AllProjectWrapper = ({ searchParams }: Props) => {
  return (
    <>
      <SecondaryBanner 
        title="Explore Properties"
        subtitle="Find your perfect home"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <ProjectTabViews searchParams={searchParams} />
    </>
  )
}

export default AllProjectWrapper
