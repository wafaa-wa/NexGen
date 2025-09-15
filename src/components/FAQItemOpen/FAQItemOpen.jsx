import './FAQItemOpen.css'
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQItemOpen({ FAQTitle, FAQAnswer, isOpen, toggleOpen, FAQIconOpen, FAQIconClosed }) {
    return (
        <div className={`FAQItemOpen ${isOpen ? 'open Flex-Row' : 'closed Flex-Row'}`} onClick={toggleOpen}>
            <div className="FAQLeftSide Flex-Column">
                <div className='TitleContainerFAQ Flex-Row'>
                    <h4 className="FAQTitle">{FAQTitle}</h4>
                    <button className="FAQIcon In-Small-Screen button-Container" >
                        <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
                    </button>

                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="FAQAnswerWrapper"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="FAQLine"></div>
                            <p className="FAQAnswer">{FAQAnswer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <button className="FAQIcon In-Big-Screen button-Container" >
                <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
            </button>
        </div>
    )
}
