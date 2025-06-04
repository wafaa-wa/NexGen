import './SectionOfSelectedBlogOpen.css'

export default function SectionOfSelectedBlogOpen({ TitleSectionBlog, TextsOfBlog }) {
    return (
        <div className='SectionOfSelectedBlogOpen Flex-Column'>
            <h3>{TitleSectionBlog}</h3>
            <div className='InformationBlog Flex-Column'>
                {
                    TextsOfBlog.map((dataTextBlog) => (
                        <p>{dataTextBlog}</p>
                    ))
                }
            </div>
        </div>
    )
}
