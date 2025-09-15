import Arrow from '../Arrow/Arrow'
import RowWithCircle from '../RowWithCircle/RowWithCircle'
import TopCard from '../TopCard/TopCard'
import './WorksLeftCard.css'
import { motion } from 'framer-motion';

export default function WorksLeftCard({ isSuccess, T, IconImag, IconText, ArrowText, RowCircle, Description, onClick }) {
    return (
        <motion.div className={isSuccess ? 'SuccessLeftCard Flex-Column' : 'WorksLeftCard Flex-Column'} onClick={onClick}
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
            <TopCard IconImag={IconImag} IconText={IconText} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText={ArrowText} />
            <div className={T ? 'ContentLeftCard Flex-Row' : 'ContentLeftCard Flex-Column'}>
                {
                    RowCircle.map((row) => (
                        <RowWithCircle
                            key={row}
                            {...row}
                        />
                    ))
                }
            </div>
            {!T && <p>{Description}</p>}
            {
                !T && <div className="mobile">
                    <Arrow ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText={ArrowText} onClick={onClick} />
                </div>
            }

        </motion.div>
    )
}
