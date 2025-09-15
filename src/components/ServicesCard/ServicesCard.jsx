
import Arrow from '../Arrow/Arrow'
import RowWithCircle from '../RowWithCircle/RowWithCircle'
import TopCard from '../TopCard/TopCard'
import './ServicesCard.css'
import { motion } from 'framer-motion';

export default function ServicesCard({ isHome, IconImag, IconText, ArrowText, onClick, RowCircle, CardText, CardTitle, CardTextOnMobile, EndCardBtn }) {
    return (
        <motion.div className={isHome ? 'ServicesCard Flex-Column' : 'JoinCard Flex-Column'} onClick={onClick} data-aos="zoom-in-up"
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
            {
                !isHome &&
                <div className='RowCircleJoin'>
                    {
                        RowCircle.map((rowdata) => (
                            <RowWithCircle
                                key={rowdata}
                                {...rowdata}
                            />
                        ))
                    }
                </div>

            }
            <div className='ServCardBottom Flex-Column'>
                <p>{CardText}</p>
                <h3>{CardTitle}</h3>
            </div>
            {
                isHome && <p className='CardText-OnMobile'>{CardTextOnMobile}</p>
            }
            {
                !isHome && <div className='ArorowOnMobile'>
                    <Arrow ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText={ArrowText} />
                </div>
            }
            {
                !isHome && <button className='End-card-button'>{EndCardBtn}</button>
            }

        </motion.div>
    )
}
