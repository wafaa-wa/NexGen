import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import HomeServices from '../../components/HomeServices/HomeServices'
import HomeWorks from '../../components/HomeWorks/HomeWorks'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import Reasons from '../../components/Reasons/Reasons'
import Testimonials from '../../components/Testimonials/Testimonials'
import { HeroNumberCardData } from '../../Data/HeroNumberCardData'

export default function Home() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <Hero ClassNameHero="Hero" isLeftHome={true} isHome={true} Title1="Digital Solutions " Title2="That Drive Success" HeroDescription="At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape."
          isHomeRight={true} isNumber={true} ClassNameNumber="HomeHeroNumber" Numbers={HeroNumberCardData}
          ArrowIcon="/images/Common/Arrow Icon.svg" ClasNameNumberCard="HomeHeroNumberCard"
        />
        <Reasons />
        <HomeServices />
        <HomeWorks />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />

      </div>
    </PageTransitionWrapper>
  )
}
