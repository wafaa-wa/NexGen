import { InfinityRowScrollData } from '../../Data/InfinityRowScrollData'
import HeroLeftSideTop from '../HeroLeftSideTop/HeroLeftSideTop'
import InfinityRowScroll from '../InfinityRowScroll/InfinityRowScroll'
import './HeroLeftSide.css'

export default function HeroLeftSide({ isHome, Title1, Title2, HeroDescription }) {
    return (
        <div className='HeroLeftSide Flex-Column'>
            <HeroLeftSideTop Des={true} Title1={Title1} Title2={Title2} HeroDescription={HeroDescription} />

            {
                isHome && <InfinityRowScroll contents={InfinityRowScrollData.Hero} />
            }
        </div>
    )
}
