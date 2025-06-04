import { useEffect, useState } from 'react';
import { TeamAboutCardData } from '../../Data/TeamAboutCardData'
import StartSection from '../StartSection/StartSection'
import TeamAboutCard from '../TeamAboutCard/TeamAboutCard'
import EndSection from '../EndSection/EndSection';

export default function TeamMembersAbout() {
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
        <div className='TeamMembersAbout Style-Section M-Top'>
            <StartSection SectionTitle="Meet the brilliant minds behind NexGen" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="ALL Members" />
            <div className='Card-Container'>
                {
                    TeamAboutCardData.slice(0, isSmallScreen && !showAll ? 3 : 4).map((datateam) => (
                        <TeamAboutCard
                            key={datateam.id}
                            {...datateam}

                        />
                    ))
                }
            </div>
            <EndSection BottomArrow="public/images/Common/Bottom Arrow.svg" TextEndSection="ALL Members" onToggle={toggleShowAll} />
        </div>
    )
}

