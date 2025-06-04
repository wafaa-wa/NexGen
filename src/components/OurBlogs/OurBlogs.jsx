import { useEffect, useState } from "react";
import { BlogCardsData } from "../../Data/BlogCardsData";
import { filtersBlogs } from "../../Data/FulterBtnData";
import BlogCard from "../BlogCard/BlogCard";
import StartSection from "../StartSection/StartSection";
import FulterBtnSuccess from "../FulterBtnSuccess/FulterBtnSuccess";
import EndSection from "../EndSection/EndSection";
import HeroCardBlog from "../HeroCardBlog/HeroCardBlog";
import './OurBlogs.css'


export default function OurBlogs() {
    console.log("filtersBlogs:", filtersBlogs);
    const [activeFilter, setActiveFilter] = useState("Design");
    const [showAll, setShowAll] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleShowAll = () => setShowAll(!showAll);
    return (
        <div className="OurBlogs Style-Section M-Top ">
            <StartSection SectionTitle="Projects Showcase" filters={filtersBlogs} defaultFilter="Design" isProjectShow={true} onFilterChange={setActiveFilter} />
            <div className="FilterButtonsProects SmallMedia">
                {filtersBlogs.map((filter) => (
                    <FulterBtnSuccess
                        key={filter}
                        isActive={activeFilter === filter}
                        onClick={() => {
                            setActiveFilter(filter);
                            onFilterChange(filter);
                        }}
                    >
                        {filter}
                    </FulterBtnSuccess>
                ))}
            </div>
            <div className="Card-Container HeroBlog">
                <img src="/images/Hero/HeroBlog/HeroBlogImg.png" className="HeroBlogLeft" />
                <HeroCardBlog />
            </div>
            <div className="Card-Container">
                {BlogCardsData.slice(0, isSmallScreen && !showAll ? 2 : 3).map((datablog) => (
                    <BlogCard
                        key={datablog.id}
                        id={datablog.id}
                        BlogImg={datablog.BlogImg[activeFilter]}
                        BlogTitle={datablog.BlogTitle[activeFilter]}
                        BlogDescription={datablog.BlogDescription[activeFilter]}
                    />
                ))}
            </div>
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Blogs" onToggle={toggleShowAll} />

        </div>
    )
}
