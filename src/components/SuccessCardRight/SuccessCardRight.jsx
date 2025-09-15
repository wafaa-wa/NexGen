import { useState } from 'react';
import FulterBtnSuccess from '../FulterBtnSuccess/FulterBtnSuccess'
import './SuccessCardRight.css'
import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessCardRight({ data }) {
    if (!data || !data.filterOptions) {
        return <p>Loading or No Data Available...</p>;
    }
    const [activeBtn, setActiveBtn] = useState("Solution");
    return (
        <div className='SuccessCardRight Flex-Column'
        >
            <div className='AllFulterBtn Flex-Row'>
                {Object.keys(data.filterOptions).map((btnLabel) => (
                    <FulterBtnSuccess isActive={activeBtn === btnLabel} onClick={() => setActiveBtn(btnLabel)}>
                        {btnLabel}
                    </FulterBtnSuccess>
                ))}
            </div>
            <motion.div className='R-SuccessRight Flex-Column'
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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeBtn} 
                        className='R-SuccessRight Flex-Column'
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2>{data.filterOptions[activeBtn]?.title || "No Title Available"}</h2>
                        <p>{data.filterOptions[activeBtn]?.text || "No Description Available"}</p>
                    </motion.div>
                </AnimatePresence>

            </motion.div>
        </div>
    )
}
