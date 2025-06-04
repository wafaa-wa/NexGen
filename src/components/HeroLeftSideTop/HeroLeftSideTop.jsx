import './HeroLeftSideTop.css'

export default function HeroLeftSideTop({ isLeftProject, Des, Title1, Title2, HeroDescription }) {
    return (
        <div className={isLeftProject ? 'HeroLeftSideTop1 Flex-Column' : 'HeroLeftSideTop Flex-Column'}>
            <div className='HeroTitle Flex-Column'>
                <div className='HeroTitle1 Flex-Row'>
                    <h1>{Title1}</h1>
                    <img src="/images/Hero/HeroHome/LogoLeft.svg" className='LogoBigMedia' />
                    <h1 className='TitleSmallMedia'>{Title2}</h1>

                </div>
                <h1 className='TitleBigMedia'>{Title2}</h1>
                <img src="/images/Hero/HeroHome/LogoLeft.svg" className='LogoSmallMedia' />

            </div>
            {
                Des && <p>{HeroDescription}</p>
            }
        </div>
    )
}
