import HeroOpenBlogRight from '../HeroOpenBlogRight/HeroOpenBlogRight'
import SectionOfSelectedBlogOpen from '../SectionOfSelectedBlogOpen/SectionOfSelectedBlogOpen'
import SocialStatsRow from '../SocialStatsRow/SocialStatsRow'
import './BlogOpenSection.css'

export default function BlogOpenSection({ MedaiaBtn, DetailsOfBlog, ProfileImage, Name, Job, Bio, email, SocialStats }) {
    return (
        <div className='BlogOpenSection Flex-Column M-Top2'>
            <img src="/images/Blog OPen Page/img1 (2).webp" className='BlogOpenImage' alt='BlogOpenImage' />
            <div className='The-Selected-Blog Flex-Row' data-aos="zoom-in-up">
                <div className='The-Selected-Blog-LeftSide Flex-Row'>
                    <div className='BlogContainerMediaBtn Flex-Column'>
                        {
                            MedaiaBtn.map((iconbtn) => (
                                <button className='Btn-Icon' key={iconbtn}><img src={iconbtn} alt='iconbtn' /></button>
                            ))

                        }
                    </div>
                    <div className='The-Selectd-Blog-Open Flex-Column'>
                        {
                            DetailsOfBlog.map((allDataBlog) => (
                                <SectionOfSelectedBlogOpen
                                    key={allDataBlog}
                                    {...allDataBlog}

                                />
                            ))
                        }

                    </div>
                </div>
                <div className='The-Selected-Blog-RightSide Flex-Column'>
                    <div className='AboutTheWriter Flex-Column'>
                        <div className='ProfileData Flex-Column'>
                            <div className='ProfileData-Top Flex-Row'>
                                <img src={ProfileImage} className='ProfileImageWriter' alt='ProfileImageWriter' />
                                <div className='Name-Job Flex-Column'>
                                    <h4>{Name}</h4>
                                    <p>{Job}</p>
                                </div>
                            </div>
                            <p>{Bio}</p>
                        </div>
                        <div className='ProfileData-Bottom Flex-Row'>
                            <div className='ProfileData-Bottom-Left Flex-Row'>
                                <img src="/images/Blog OPen Page/Twitter.svg" alt='Twitter'/>
                                <p>{email}</p>
                            </div>
                            <img src="/images/Common/Arrow Icon.svg" className='Arrow-ProfileData-Bottom' alt='Arrow-ProfileData-Bottom' />
                        </div>
                    </div>
                    <div className='SocialStats Flex-Column'>
                        {
                            SocialStats.map((SocialData) => (
                                <SocialStatsRow
                                    key={SocialData}
                                    {...SocialData} />

                            ))

                        }
                    </div>
                    <HeroOpenBlogRight />
                </div>


            </div>


        </div>
    )
}

