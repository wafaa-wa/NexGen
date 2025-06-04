import { useParams } from "react-router-dom";
import BlogOpenSection from "../../components/BlogOpenSection/BlogOpenSection";
import { BlogOpenData } from "../../Data/BlogOpenData";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import RelatedBlog from "../../components/RelatedBlog/RelatedBlog";

export default function BlogsOpen() {
    const { id } = useParams();
    const selectedData = BlogOpenData.find((blog) => blog.id === Number(id));

    return (
        <div className="BlogsOpen Padding50">
            <Hero ClassNameHero="Hero1" isLeftAbout={true} Title1="Mastering the Art" Title2="of Minimalistic Design" isBlogOpen={true} />
            {selectedData ? <BlogOpenSection {...selectedData} /> : <p>Blog Not Found</p>}
            <RelatedBlog />
            <Testimonials />
            <FAQ FormTitle="Ask your question" label1="Name" placholder1="Enter your name" label2="Email"
                placholder2="Enter your email" label3="Your Question" placholder3="Enter Your Question Here ....."
                EndTextButton="Send Your Message" />
        </div>
    );
}
