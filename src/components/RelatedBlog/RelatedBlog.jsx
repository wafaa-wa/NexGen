import { useEffect, useState } from "react";
import { BlogCardsData } from "../../Data/BlogCardsData";
import BlogCard from "../BlogCard/BlogCard";
import EndSection from "../EndSection/EndSection";
import StartSection from "../StartSection/StartSection";


export default function RelatedBlog() {
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
        <div className="RelatedBlog Style-Section M-Top ">
            <StartSection SectionTitle="Related Blogs" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="ALL Blogs" />
            <div className="Card-Container">
                {BlogCardsData.slice(0, isSmallScreen && !showAll ? 2 : 3).map((datablog) => (
                    <BlogCard
                        key={datablog.id}
                        id={datablog.id}
                        BlogImg={datablog.BlogImg.Design}
                        BlogTitle={datablog.BlogTitle.Design}
                        BlogDescription={datablog.BlogDescription.Design}
                    />
                ))}
            </div>
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Blogs" onToggle={toggleShowAll} />

        </div>
    )
}

