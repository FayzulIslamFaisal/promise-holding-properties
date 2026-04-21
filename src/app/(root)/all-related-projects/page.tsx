import { Metadata } from "next";
import RelatedProjectWrapper from "@/components/related-project/RelatedProjectWrapper"

export const metadata: Metadata = {
  title: "All Projects",
  description: "Browse through our complete list of residential and commercial projects at Promise Holding Properties.",
};


const AllRelatedProjectPage = () => {
  return (
    <RelatedProjectWrapper/>
  )
}

export default AllRelatedProjectPage
