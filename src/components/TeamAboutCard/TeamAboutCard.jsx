import './TeamAboutCard.css'
import { motion } from 'framer-motion';

export default function TeamAboutCard({ Name, Work, ProfileImg, items }) {
    return (
        <motion.div className='TeamAboutCard Flex-Column pointer' data-aos="zoom-in-up"
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
            <div className='TeamAboutCard-Top lex-Column'>
                <h4>{Name}</h4>
                <p>{Work}</p>
            </div>
            <img className='ProfileImg' src={ProfileImg} alt='ProfileImg'/>
            <div className='TeamAboutCard-Bottom'>
                <div className='TeamAboutCard-Bottom-Container Flex-Row'>
                    {
                        items?.map((icon) => (
                            <button key={icon.id} className='button-Container'><img src={icon} alt='icon'/></button>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}
