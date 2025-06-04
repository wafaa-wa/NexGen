import ContactSection from "../../components/ContactSection/ContactSection";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import { HeroNumberCardData } from "../../Data/HeroNumberCardData";


export default function Contact() {
  return (
    <div className="Padding50">
      <Hero ClassNameHero="Hero1" isLeftHome={true} isHome={true} Title1="Get in Touch" Title2="with Us Today!"
        HeroDescription="At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team."
        isAboutPage={true} ClassNameNumber="ContactHeroNumber" Numbers={HeroNumberCardData} ArrowIcon="/images/Common/Bottom Arrow.svg"
        ClasNameNumberCard="ContactHeroNumberCard" />
      <ContactSection />
      <Testimonials />
      <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
        placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
        EndTextButton="Send Your Message" />
    </div>
  )
}
