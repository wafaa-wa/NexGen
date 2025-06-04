import HeroLeftSideTop from '../HeroLeftSideTop/HeroLeftSideTop'
import './AbouLeft.css'

export default function AbouLeft({ Title1, Title2, HeroDescription }) {
    return (
        <div className='AbouLeft'>
            <HeroLeftSideTop Title1={Title1} Title2={Title2} HeroDescription={HeroDescription} />
        </div>
    )
}
