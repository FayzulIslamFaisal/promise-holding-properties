import HomePageWrapper from "@/components/home-page/HomePageWrapper"

export const dynamic = "force-dynamic";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const params = await searchParams;
  return <HomePageWrapper searchParams={params} />
}

export default HomePage
