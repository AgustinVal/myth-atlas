import Image from "next/image";

import Hero from "@/components/Hero";
import WorldMap from "@/components/WorldMap";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <WorldMap />
      <Footer />
    </main>
  )
}
