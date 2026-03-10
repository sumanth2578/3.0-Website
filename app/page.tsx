import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Approach from "../components/Approach/Approach";
import Testimonials from "../components/Testimonials/Testimonials";
import Innovation from "../components/Innovation/Innovation";
import Team from "../components/Team/Team";
import Portfolio from "../components/Portfolio/Portfolio";
import BottomHero from "../components/BottomHero/BottomHero";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Approach />
      <Testimonials />
      <Innovation />
      <Team />
      <Portfolio />
      <BottomHero />
      <Footer />
    </main>
  );
}
