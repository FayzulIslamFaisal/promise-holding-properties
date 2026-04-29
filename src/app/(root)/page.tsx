import HomePageWrapper from "@/components/home-page/HomePageWrapper"

export const dynamic = "force-dynamic";

const HomePage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  return <HomePageWrapper searchParams={searchParams} />
}

export default HomePage
