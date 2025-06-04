import { useEffect, useState } from "react";
import StartSection from "../StartSection/StartSection";
import { filtersProject } from "../../Data/FulterBtnData";
import FulterBtnSuccess from "../FulterBtnSuccess/FulterBtnSuccess";
import { ProjectRowrData1, ProjectRowrData2 } from "../../Data/WoksRowrData";
import WorksRowContainer from "../WorksRowContainer/WorksRowContainer";
import EndSection from "../EndSection/EndSection";


export default function ProjectsShow() {
    console.log("filtersProject:", filtersProject);
    const [activeFilter, setActiveFilter] = useState("Web Development");
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
        <div className='ProjectsShow Style-Section2 M-Top'>
            <StartSection SectionTitle="Projects Showcase" filters={filtersProject} defaultFilter="Web Development" isProjectShow={true} onFilterChange={setActiveFilter} />
            <div className="FilterButtonsProects SmallMedia">
                {filtersProject.map((filter) => (
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
            {ProjectRowrData1.map((data) => (
                <WorksRowContainer
                    key={data.id}
                    {...data}
                    Description={data.Description[activeFilter]}
                    WorksImg={data.WorksImg[activeFilter]}
                    showRightCard={!isSmallScreen || showAll}
                />
            ))}
            {ProjectRowrData2.map((data) => (
                <WorksRowContainer
                    key={data.id}
                    {...data}
                    Description={data.Description[activeFilter]}
                    WorksImg={data.WorksImg[activeFilter]}
                    showRightCard={!isSmallScreen || showAll}
                />
            ))}
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="View All" onToggle={toggleShowAll} />

        </div>
    )
}
