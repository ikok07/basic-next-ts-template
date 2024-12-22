import Hero from "@/app/_components/home/hero/Hero";
import Work from "@/app/_components/home/work/Work";

export default async function Home() {
  return <div>
    <Hero />
    <div className="w-[95%] max-w-[60rem] mx-auto">
      <Work />
    </div>
  </div>
}
