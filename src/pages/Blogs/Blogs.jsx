import FAQ from '../../components/FAQ/FAQ'
import OurBlogs from '../../components/OurBlogs/OurBlogs'
import PageTransitionWrapper from '../../components/PageTransitionWrapper'
import Testimonials from '../../components/Testimonials/Testimonials'


export default function Blogs() {
  return (
    <PageTransitionWrapper>
      <div className='Padding50'>
        <OurBlogs />
        <Testimonials />
        <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
          placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
          EndTextButton="Send Your Message" />
      </div>
    </PageTransitionWrapper>
  )
}
