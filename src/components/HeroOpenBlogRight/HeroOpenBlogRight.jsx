import './HeroOpenBlogRight.css'
import { HeroOpenBlogRowData } from '../../Data/HeroOpenBlogRowData'
import HeroOpenBlogRow from '../HeroOpenBlogRow/HeroOpenBlogRow'

export default function HeroOpenBlogRight() {
    return (
        <div className='HeroOpenBlogRight Flex-Column'>
            {
                HeroOpenBlogRowData.map((heroOpenBlog) => (
                    <HeroOpenBlogRow
                        key={heroOpenBlog}
                        {...heroOpenBlog} />
                ))
            }
        </div>
    )
}
