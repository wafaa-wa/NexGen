import Arrow from '../Arrow/Arrow'
import './AchievementsCard.css'
import { motion } from 'framer-motion';

export default function AchievementsCard({ isApply, Date, Title, Description }) {
    return (
        <motion.div className={isApply ? 'ApplyCard Flex-Column pointer' : 'AchievementsCard Flex-Column pointer'} data-aos="zoom-in-up"
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
            <div className='AchievementsCard-Date'>
                <p>{Date}</p>
            </div>
            <div className='AchievementsCard-Title'>
                <h4>{Title}</h4>
            </div>
            <div className='AchievementsCard-Description Flex-Column'>
                <p>{Description}</p>
                {
                    isApply && <Arrow ArrowIcon="/images/Common/Bottom Arrow.svg" ArrowText="Know More" />

                }

            </div>

        </motion.div>
    )
}
