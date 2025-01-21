import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Faq from "../Faq/Faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      <Testimonial />
      <Faq />
      <ContactMe />
      <Footer />
    </>
  );
}
