import CompanyFeatures from "@/components/home-page/CompanyFeatures"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className=''>
      <div className="relative w-full h-[100vh] overlay-slider">
        <Image src="/assets/images/slider/propertiest-01.webp" fill={true} alt="logo" />
      </div>
      <CompanyFeatures />
    </div>
  )
}

export default HomePage
