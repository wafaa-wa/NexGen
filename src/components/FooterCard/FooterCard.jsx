import './FooterCard.css'
import { motion } from 'framer-motion';

export default function FooterCard({ isFeturesCard, F, MediaIcon, ArrowIcon1, TitleCard, TextCard }) {
    return (
        <motion.div className={isFeturesCard ? 'KeyFeaturesCard Flex-Column pointer' : 'FooterCard Flex-Column pointer'} data-aos="zoom-in-up"
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
            {
                !F && <div className='FooterCard-Top Flex-Row'>
                    <button className='Btn-Icon'><img src={MediaIcon} /></button>
                    <button className='button-Container'><img src={ArrowIcon1} /></button>
                </div>
            }
            {
                F && <button className='Btn-Icon'><img src={MediaIcon} /></button>
            }
            <div className='FooterCard-Botttom Flex-Column'>
                <h3>{TitleCard}</h3>
                <p>{TextCard}</p>
            </div>


        </motion.div>
    )
}
