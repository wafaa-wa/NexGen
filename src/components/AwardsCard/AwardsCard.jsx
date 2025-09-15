import './AwardsCard.css'
import { motion } from 'framer-motion';

export default function AwardsCard({ Date, TheDate, ImageIcon, Title, Desciption }) {
    return (
        <motion.div className='AwardsCard Flex-Column pointer' data-aos="zoom-in-up"
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
            <div className="AwardsCard-Top Flex-Row" >
                <div className='Flex-Row Row1'>
                    <p>{Date}</p>
                    <div className='circle'></div>
                    <p className='p-Bold'>{TheDate}</p>
                </div>
                <button className="Btn-Icon"><img src={ImageIcon} /></button>
            </div>
            <div className="AwardsCard-Bottom Flex-Column">
                <h3>{Title}</h3>
                <p>{Desciption}</p>
            </div>
        </motion.div>
    )
}
