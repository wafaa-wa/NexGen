import ApplySection from '../../components/ApplySection/ApplySection'
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import JoinCareer from '../../components/JoinCareer/JoinCareer'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import Testimonials from '../../components/Testimonials/Testimonials'


export default function Careers() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <Hero ClassNameHero="Hero1" isLeftAbout={true} Title1="Unlock Your Potential" Title2="in the Digital World" isCareer={true} />
        <JoinCareer />
        <ApplySection />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />
      </div>
    </PageTransitionWrapper>
  )
}
