import Arrow from '../Arrow/Arrow'
import './ReasonsCard.css'
import { motion } from 'framer-motion';

export default function ReasonsCard({ R, ReaCardTitle, ReaCardText, T, ProfileImg, Name, Work, RightArrow }) {
    return (

        <motion.div className={R ? 'ReasonsCard Flex-Column' : 'TestimonialsCard Flex-Column'} data-aos="zoom-in-up"
            whileHover={{
                scale: 1.05,
                y: -6,
                zIndex: 2,
                boxShadow: '0 0 14px #E7BEB1',
            }}
            transition={{
                duration: 0.05,
                ease: 'easeInOut',
            }}
            style={{ position: 'relative' }}>
            <div className='ReaCardTop Flex-Column'>
                <h3>{ReaCardTitle}</h3>
                <p>{ReaCardText}</p>
            </div>
            {R && <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="Learn More" />}
            {T && <div className='TestimonialsCardBottom Flex-Row'>
                <div className='T-Left Flex-Row'>
                    <img src={ProfileImg} alt='ProfileImg' />
                    <div className='T-left-Text Flex-Column'>
                        <h5>{Name}</h5>
                        <p>{Work}</p>
                    </div>
                </div>
                <button className='RightArrow button-Container'>
                    <img src={RightArrow} alt='RightArrow' />
                </button>
            </div>}

        </motion.div>
    )
}
