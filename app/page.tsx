import Hero from "@/app/_components/home/hero/Hero";
import Work from "@/app/_components/home/work/Work";
import Visualise from "@/app/_components/home/visualise/Visualise";
import Offers from "@/app/_components/home/offers/Offers";
import Navbar from "@/app/_components/nav/Navbar";

export default async function Home() {
  return <div>
    <Navbar/>
    <Hero />
    <Work />
    <Visualise />
    <Offers />
  </div>
}
