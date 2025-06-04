import { useState } from 'react';
import './SocialStatsRow.css'

export default function SocialStatsRow({ IconSvg, Description, NumberReaction, Users }) {
    const [reactionCount, setReactionCount] = useState(parseFloat(NumberReaction));
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (Description === "Liked By") {
            setReactionCount((prevCount) => {
                const newCount = isActive ? prevCount - 1 : prevCount + 1;
                return parseFloat(newCount.toFixed(1));
            });
            setIsActive((prevState) => !prevState);
        } else if (Description === "Shared BY") {
            setReactionCount((prevCount) => Number(prevCount) + 1);
        }
    };
    return (
        <div className='SocialStatsRow Flex-Row'>
            <button className='Btn-Icon' onClick={handleClick}>
                {Description === "Liked By" ? IconSvg(isActive ? "#ED142E" : "#FFFFFF") : IconSvg}
            </button>
            <div className='SocialStatsRow-Right Flex-Row'>
                <p>{Description}</p>
                <div className='SocialStatsDetails Flex-Row'>
                    <p className='NumberReaction'>{Description === "Liked By" ? `${reactionCount}k` : reactionCount}</p>
                    <div className='line'></div>
                    <p className='Users'>{Users}</p>
                </div>
            </div>
        </div>
    )
}
