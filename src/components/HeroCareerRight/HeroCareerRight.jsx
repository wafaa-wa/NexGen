import Arrow from '../Arrow/Arrow'
import './HeroCareerRight.css'

export default function HeroCareerRight() {
    return (
        <div className='HeroCareerRight Flex-Column'>
            <div className='HeroCareerRight-Top Flex-Column'>
                <h3>At NexGen</h3>
                <p>We believe in fostering a dynamic and collaborative work environment that empowers our team members
                    to excel in their respective fields. Join us to be part of a passionate and innovative team
                    dedicated to crafting exceptional digital solutions for clients across the globe. We are committed
                    to nurturing talent, encouraging professional growth, and creating a
                    workplace where creativity thrives.
                </p>
            </div>
            <Arrow ArrowIcon="/images/Common/Bottom Arrow.svg" ArrowText="Know More" />
        </div>
    )
}
