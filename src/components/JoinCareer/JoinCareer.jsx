import { useEffect, useState } from "react";
import { JoinCardData } from "../../Data/JoinCardData";
import EndSection from "../EndSection/EndSection";
import ServicesCard from "../ServicesCard/ServicesCard";
import StartSection from "../StartSection/StartSection";


export default function JoinCareer() {
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
    <div className="JoinCareer Style-Section M-Top">
      <StartSection SectionTitle="Join Our Team at NexGen" />
      <div className="Card-Container">
        {
          JoinCardData.slice(0, 2).map((joindata1) => (
            <ServicesCard
              key={joindata1.id}
              {...joindata1}

            />
          ))

        }
      </div>
      <div className="Card-Container">
        {(!isSmallScreen || showAll) && (
          <div className="Card-Container">
            {
              JoinCardData.slice(2, 4).map((joindata1) => (
                <ServicesCard
                  key={joindata1.id}
                  {...joindata1}

                />
              ))

            }
          </div>
        )}
      </div>
      <EndSection BottomArrow="public/images/Common/Bottom Arrow.svg" TextEndSection="View All" onToggle={toggleShowAll} />

    </div>
  )
}
