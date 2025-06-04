import { useNavigate } from "react-router-dom";
import { WoksRowrData1, WoksRowrData2 } from "../../Data/WoksRowrData";
import EndSection from "../EndSection/EndSection";
import StartSection from "../StartSection/StartSection";
import WorksRowContainer from "../WorksRowContainer/WorksRowContainer";
import { useEffect, useState } from "react";


export default function HomeWorks() {
    const navigate = useNavigate();
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
        < div className="HomeWorks M-Top Style-Section2" >
            <StartSection SectionTitle="Our Works" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="ALL Works" />
            {WoksRowrData1.map((datawo, index) => (
                <WorksRowContainer
                    key={index}
                    {...datawo}
                    showRightCard={!isSmallScreen || showAll}
                    onClick={() => navigate("/projects")}
                />
            ))}

            {
                WoksRowrData2.map((datawor, index) => (
                    <WorksRowContainer
                        key={index}
                        {...datawor}
                        showRightCard={!isSmallScreen || showAll}
                        onClick={() => navigate("/projects")}
                    />
                ))

            }
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="ALL Works" onToggle={toggleShowAll} />
        </div >
    )
}
