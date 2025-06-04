import AbouLeft from '../AbouLeft/AbouLeft'
import HeroCardBlog from '../HeroCardBlog/HeroCardBlog'
import HeroCareerRight from '../HeroCareerRight/HeroCareerRight'
import HeroHomeRightSide from '../HeroHomeRightSide/HeroHomeRightSide'
import HeroLeftSide from '../HeroLeftSide/HeroLeftSide'
import HeroLeftSideTop from '../HeroLeftSideTop/HeroLeftSideTop'
import HeroNumber from '../HeroNumber/HeroNumber'
import HeroOpenBlogRight from '../HeroOpenBlogRight/HeroOpenBlogRight'
import HeroServicesRight from '../HeroServicesRight/HeroServicesRight'
import './Hero.css'

export default function Hero({ ClassNameHero, isLeftHome, isHome, Des, Title1, Title2, HeroDescription, isHomeRight, ClassNameNumber, Numbers, ArrowIcon, ClasNameNumberCard, isNumber, isServices, ClassNameSectionImg, isLeftSideTop, isLeftProject, isProject, isLeftAbout, isAboutPage, isCareer, isBlogOpen }) {
    return (
        <div className={ClassNameHero}>
            {isLeftSideTop && <HeroLeftSideTop isLeftProject={isLeftProject} Des={Des} Title1={Title1} Title2={Title2} HeroDescription={HeroDescription} />}
            {isProject && <HeroServicesRight ClassNameSectionImg={ClassNameSectionImg} />}
            <div className='HeroContent'>
                {isLeftHome && <HeroLeftSide isHome={isHome} Title1={Title1} Title2={Title2} HeroDescription={HeroDescription} />}
                {isHomeRight && <HeroHomeRightSide />}
                {isServices && <HeroServicesRight ClassNameSectionImg={ClassNameSectionImg} />}
                {isLeftAbout && <AbouLeft Title1={Title1} Title2={Title2} />}
                {isAboutPage && <HeroNumber ClassNameNumber={ClassNameNumber} Numbers={Numbers} ArrowIcon={ArrowIcon} ClasNameNumberCard={ClasNameNumberCard} />}
                {isCareer && <HeroCareerRight />}
                {isBlogOpen && <HeroOpenBlogRight />}


            </div>
            {isNumber && <HeroNumber ClassNameNumber={ClassNameNumber} Numbers={Numbers} ArrowIcon={ArrowIcon} ClasNameNumberCard={ClasNameNumberCard} />}
        </div>
    )
}
