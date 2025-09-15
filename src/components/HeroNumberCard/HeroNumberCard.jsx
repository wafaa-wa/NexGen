import CountUp from 'react-countup'
import Arrow from '../Arrow/Arrow'
import './HeroNumberCard.css'
import { motion } from 'framer-motion';

export default function HeroNumberCard({ isNumber, ClasNameNumberCard, TitleCard, TheNumber, ArrowIcon, index }) {
    return (
        <motion.div className={ClasNameNumberCard}
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
            {isNumber && <p>{TitleCard}</p>}
            {isNumber && <h2>
                <CountUp
                    start={0}
                    end={parseInt(TheNumber)}
                    duration={2}
                    delay={index * 0.2}
                    enableScrollSpy={true}
                    scrollSpyDelay={100}
                    suffix={TheNumber.includes('+') ? '+' : TheNumber.includes('K') ? 'K' : TheNumber.includes('%') ? '%' : ''}
                />
            </h2>}
            {
                !isNumber && <Arrow G={true} ArrowIcon={ArrowIcon} ArrowText="Know More" />
            }

        </motion.div>
    )
}
