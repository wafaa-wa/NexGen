import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import ProjectsShow from '../../components/ProjectsShow/ProjectsShow'
import Testimonials from '../../components/Testimonials/Testimonials'

export default function Projects() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <Hero ClassNameHero="HeroProject" isLeftSideTop={true} isLeftProject={true} Des={true} Title1="Empowering Your" Title2="Digital Vision"
          HeroDescription="At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence."
          isProject={true} ClassNameSectionImg="HeroProjectRirghtSide" />
        <KeyFeatures />
        <ProjectsShow />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />
      </div>
    </PageTransitionWrapper>
  )
}
