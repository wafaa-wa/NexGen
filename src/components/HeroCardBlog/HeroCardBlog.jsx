import { HeroCardBlogData } from '../../Data/HeroCardBlogData'
import Arrow from '../Arrow/Arrow'
import RowWithCircle from '../RowWithCircle/RowWithCircle'
import './HeroCardBlog.css'

export default function HeroCardBlog() {
    return (
        <div className='HeroCardBlog Flex-Column'>
            <div className='HeroCardBlog1 Flex-Column'>
                <h3>Web Design Trends Shaping 2024</h3>
                <div className='HeroCardBlog1-1 Flex-Row'>
                    {
                        HeroCardBlogData.map((heroCard) => (
                            <RowWithCircle
                                key={heroCard}
                                {...heroCard}
                            />
                        ))
                    }
                </div>
            </div>
            <p>Stay ahead of the design curve with insights into the latest web design trends.
                From immersive user experiences to bold color choices, explore the design elements
                that will dominate the digital landscape in 2023 and beyond.
            </p>
            <div className='HeroCardBlog2 Flex-Row'>
                <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="Read Full Blog" />
                <div className='HeroCardBlog2-2 Flex-Row'>
                    <p>Published Date</p>
                    <h4>7th February 2023</h4>
                </div>
            </div>
        </div>
    )
}
