import { useEffect, useState } from "react";
import { TestimonialsCardsData } from "../../Data/TestimonialsCardsData";
import EndSection from "../EndSection/EndSection";
import ReasonsCard from "../ReasonsCard/ReasonsCard";
import StartSection from "../StartSection/StartSection";
import './Testimonials.css'


export default function Testimonials() {
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
        <div className='Testimonials M-Top Style-Section'>
            <StartSection SectionTitle="Testimonials" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="ALL Testimonials" />
            <div className="Card-Container">
                {
                    TestimonialsCardsData.slice(0, isSmallScreen && !showAll ? 3 : 4).map((data3) => (
                        <ReasonsCard
                            key={data3.id}
                            {...data3}

                        />
                    ))
                }
            </div>
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Testimonials" onToggle={toggleShowAll} />
        </div>
    )
}
