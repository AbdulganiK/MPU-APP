import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import HomeStats from "@/components/home-stats";
import Footer from "@/components/footer";


export default function LandingPage() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Features/>
    <HomeStats/>
    <Footer/>
  </>
  );
}
