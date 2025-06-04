import Arrow from '../Arrow/Arrow'
import './HeroServicesRight.css'

export default function HeroServicesRight({ ClassNameSectionImg }) {
    return (
        <div className={ClassNameSectionImg}>
            <div className='ServicesRightRowImg'>
                <Arrow ArrowIcon="/images/Hero/Arrow In Button.svg" ArrowText="View Blog" />
                <p className='RightText'>Web Development. </p>
            </div>

        </div>
    )
}
