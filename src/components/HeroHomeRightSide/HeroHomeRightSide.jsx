import './HeroHomeRightSide.css'

export default function HeroHomeRightSide() {
    return (
        <div className='HeroHomeRightSide Flex-Column'>
            <img src="/images/Hero/HeroHome/HeroImg.webp" className='HeroHomeImg' alt='HeroImg' />
            <img src="/images/Hero/HeroHome/Logo Right.svg" className='Logo-Right-Side' alt='Logo-Right-Side' />
            <div className='HeroHomeRightSide-Bottom Flex-Column'>
                <h4>Estatein Real Estate</h4>
                <p>Web Development. </p>
            </div>
        </div>
    )
}
