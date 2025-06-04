import { useEffect, useState } from "react";
import { AwardsCardData } from "../../Data/AwardsCardData";
import AwardsCard from "../AwardsCard/AwardsCard";
import EndSection from "../EndSection/EndSection";
import StartSection from "../StartSection/StartSection";


export default function AwardsOfAbout() {
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
        <div className="AwardsOfAbout Style-Section2 M-Top">
            <StartSection SectionTitle="Awards & Recognitions" />
            <div className="Card-Container">
                {
                    AwardsCardData.slice(0, isSmallScreen && !showAll ? 3 : 4).map((awarddata) => (
                        <AwardsCard
                            key={awarddata.id}
                            {...awarddata}

                        />
                    ))
                }
            </div>
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Awards & Recognitions" onToggle={toggleShowAll} />

        </div>
    )
}

