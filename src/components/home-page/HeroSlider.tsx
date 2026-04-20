import { HeaderBanner } from "@/types/api";
import { bannerService } from "@/services"
import HeroSliderClient from "./HeroSliderClient"

const HeroSlider = async () => {
  let banners: HeaderBanner[] = [];
  try {
    const res = await bannerService.getHeaderBanners();
    banners = res.data || [];
  } catch (error) {
    console.error("Error fetching banners:", error);
  }

  return <HeroSliderClient banners={banners} />
}

export default HeroSlider
