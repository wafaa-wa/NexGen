import './HeroOpenBlogRow.css'

export default function HeroOpenBlogRow({ Text1, Text2 }) {
    return (
        <div className='HeroOpenBlogRow Flex-Row'>
            <p>{Text1}</p>
            <h4>{Text2}</h4>
        </div>
    )
}
