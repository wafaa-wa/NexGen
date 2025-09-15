import { useNavigate } from 'react-router-dom';
import Arrow from '../Arrow/Arrow'
import './BlogCard.css'
import { motion } from 'framer-motion';

export default function BlogCard({ BlogImg, BlogTitle, BlogDescription, id }) {
    const navigate = useNavigate();
    return (
        <motion.div className='BlogCard Flex-Column' data-aos="zoom-in-up"
            whileHover={{
                scale: 1.05,
                y: -6,
                zIndex: 2,
                boxShadow: '0 0 14px #E7BEB1',
            }}
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
            }}
            style={{ position: 'relative' }}
            onClick={() => navigate(`/blog/${id}`)}>
            <img src={BlogImg} alt='BlogImg' />
            <div className='BlogCardBottom Flex-Column'>
                <div className='BlogCardBottom1 Flex-Column'>
                    <h4>{BlogTitle}</h4>
                    <p>{BlogDescription}</p>
                </div>
                <Arrow
                    G={true}
                    ArrowIcon="/images/Common/Arrow Icon.svg"
                    ArrowText="Read Full Blog"

                />
            </div>
        </motion.div>
    )
}
