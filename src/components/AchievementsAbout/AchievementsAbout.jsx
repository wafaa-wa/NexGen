import { useEffect, useState } from "react";
import { AchievementsCardData } from "../../Data/AchievementsCardData";
import AchievementsCard from "../AchievementsCard/AchievementsCard";
import EndSection from "../EndSection/EndSection";
import StartSection from "../StartSection/StartSection";


export default function AchievementsAbout() {
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
        <div className="AchievementsAbout Style-Section2 M-Top">
            <StartSection SectionTitle="Our Achievements" />
            <div className="Card-Container">
                {
                    AchievementsCardData.slice(0, isSmallScreen && !showAll ? 3 : 4).map((achievementdata) => (
                        <AchievementsCard
                            key={achievementdata.id}
                            {...achievementdata}

                        />
                    ))
                }
            </div>
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Achievements" onToggle={toggleShowAll} />

        </div>
    )
}
