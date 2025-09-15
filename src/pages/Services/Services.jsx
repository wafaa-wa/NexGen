import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import ServicssOfServicesPage from '../../components/ServicssOfServicesPage/ServicssOfServicesPage'
import SuccessStories from '../../components/SuccessStories/SuccessStories'
import Testimonials from '../../components/Testimonials/Testimonials'

export default function Services() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <Hero ClassNameHero="Hero1" isLeftHome={true} isHome={true} Title1="Our Comprehensive " Title2="Digital Solutions" HeroDescription="At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation"
          isServices={true} ClassNameSectionImg="HeroServicesRirghtSide"
        />
        <ServicssOfServicesPage />
        <SuccessStories />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />

      </div>
    </PageTransitionWrapper>
  )
}
