import { motion } from 'framer-motion';

export default function PageTransitionWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.div>
    );
}