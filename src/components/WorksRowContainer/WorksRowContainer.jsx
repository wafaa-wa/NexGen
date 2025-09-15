import WorksLeftCard from '../WorksLeftCard/WorksLeftCard'
import WorksRightCard from '../WorksRightCard/WorksRightCard'
import './WorksRowContainer.css'
import { motion } from 'framer-motion';

export default function WorksRowContainer({ IconImag, IconText, ArrowText, onClick, RowCircle, Description, WorksImg, showRightCard, texts, Text5, ProfileImages, CardText }) {
    return (
        <motion.div className='WorksRowContainer Flex-Row' data-aos="zoom-in-up"
            key={Description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            <WorksLeftCard IconImag={IconImag} IconText={IconText} ArrowText={ArrowText} onClick={onClick} RowCircle={RowCircle} Description={Description} />
            <img src={WorksImg} className='WorksImg' alt='WorksImg' />
            {showRightCard && (
                <WorksRightCard texts={texts} Text5={Text5} ProfileImages={ProfileImages} CardText={CardText} />
            )}
        </motion.div>
    )
}
