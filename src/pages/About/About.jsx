import AchievementsAbout from '../../components/AchievementsAbout/AchievementsAbout'
import AwardsOfAbout from '../../components/AwardsOfAbout/AwardsOfAbout'
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import TeamMembersAbout from '../../components/TeamMembersAbout/TeamMembersAbout'
import Testimonials from '../../components/Testimonials/Testimonials'
import { HeroNumberCardData } from '../../Data/HeroNumberCardData'

export default function About() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <Hero ClassNameHero="Hero1" isLeftAbout={true} Title1="Elevating Brands" Title2="Elevating Brands" isAboutPage={true}
          ClassNameNumber="AboutHeroNumber" Numbers={HeroNumberCardData}
          ArrowIcon="/images/Common/Bottom Arrow.svg" ClasNameNumberCard="AboutHeroNumberCard" />
        <TeamMembersAbout />
        <AchievementsAbout />
        <AwardsOfAbout />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />
      </div>
    </PageTransitionWrapper>
  )
}
