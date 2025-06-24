
import UpcomingProjects from "@/components/home-page/UpcomingProjects"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className=''>
      <div className="relative w-full h-[60vh] overlay-slider">
        <Image src="/assets/images/slider/propertiest-01.webp" fill={true} alt="logo" />
      </div>
      <UpcomingProjects />
    </div>
  )
}

export default HomePage
