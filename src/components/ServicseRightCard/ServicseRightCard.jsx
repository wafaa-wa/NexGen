import Arrow from '../Arrow/Arrow'
import './ServicseRightCard.css'
import { motion } from 'framer-motion';

export default function ServicseRightCard({ TitleTop, Imag1, Imag2 }) {
    return (
        <motion.div className='ServicseRightCard Flex-Column' data-aos="zoom-in-up"
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
            <div className='CardServicesTop Flex-Row'>
                <h4>{TitleTop}</h4>
                <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="View All" />
            </div>
            <div className='CardServicesBotom Flex-Row'>
                <img src={Imag1} alt='Imag1'/>
                <img src={Imag2} alt='Imag2' />

            </div>

        </motion.div>
    )
}
