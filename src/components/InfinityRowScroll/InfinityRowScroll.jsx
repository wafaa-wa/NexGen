import Marquee from 'react-fast-marquee'
import './InfinityRowScroll.css'

export default function InfinityRowScroll({ isHero, contents }) {
    return (
        <div className={isHero ? 'InfinityRowScrollHero' : 'InfinityRowScrollFooter'}>

            <Marquee autoFill pauseOnHover>
                <div className='InfinityRowScrollContent Flex-Row'>
                    {contents.map((content, index11) => (
                        <span key={index11}>{content}<img src="/images/Common/Circle.png" /></span>
                    ))}
                </div>
            </Marquee>

        </div>
    )
}
