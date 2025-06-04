import { useEffect, useState } from "react";
import { ApplyCardData } from "../../Data/ApplyCardData";
import AchievementsCard from "../AchievementsCard/AchievementsCard";
import EndSection from "../EndSection/EndSection";
import StartSection from "../StartSection/StartSection";


export default function ApplySection() {
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
        <div className="ApplySection Style-Section M-Top">
            <StartSection SectionTitle="How to Apply" />
            <div className="Card-Container">
                {
                    ApplyCardData.slice(0, isSmallScreen && !showAll ? 3 : 4).map((aplydata) => (
                        <AchievementsCard
                            key={aplydata.id}
                            {...aplydata}

                        />

                    ))
                }
            </div>
            <div className="Card-Container">
                {(!isSmallScreen || showAll) && (
                    <div className="Card-Container">
                        {ApplyCardData.slice(4, 8).map((applyData) => (
                            <AchievementsCard key={applyData.id} {...applyData} />
                        ))}
                    </div>
                )}

            </div>
            <EndSection BottomArrow="public/images/Common/Bottom Arrow.svg" TextEndSection="ALL Steps" onToggle={toggleShowAll} />

        </div>
    )
}
