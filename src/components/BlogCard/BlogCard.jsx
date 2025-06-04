import { useNavigate } from 'react-router-dom';
import Arrow from '../Arrow/Arrow'
import './BlogCard.css'

export default function BlogCard({ BlogImg, BlogTitle, BlogDescription, id }) {
    const navigate = useNavigate();
    return (
        <div className='BlogCard Flex-Column'>
            <img src={BlogImg} />
            <div className='BlogCardBottom Flex-Column'>
                <div className='BlogCardBottom1 Flex-Column'>
                    <h4>{BlogTitle}</h4>
                    <p>{BlogDescription}</p>
                </div>
                <Arrow
                    G={true}
                    ArrowIcon="/images/Common/Arrow Icon.svg"
                    ArrowText="Read Full Blog"
                    onClick={() => navigate(`/blog/${id}`)}
                />
            </div>
        </div>
    )
}
