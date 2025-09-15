import './HeroLeftSideTop.css'
import { motion } from 'framer-motion';

export default function HeroLeftSideTop({ isLeftProject, Des, Title1, Title2, HeroDescription }) {

    return (
        <div className={isLeftProject ? 'HeroLeftSideTop1 Flex-Column' : 'HeroLeftSideTop Flex-Column'}>
            <div className='HeroTitle Flex-Column'>
                <div className='HeroTitle1 Flex-Row'>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl font-bold text-orange-400"
                    >
                        {Title1}
                    </motion.h1>
                    <img src="/images/Hero/HeroHome/LogoLeft.svg" className='LogoBigMedia StartProjectImg' alt='LogoLeft' />
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-5xl font-bold text-orange-400 TitleSmallMedia"
                    >
                        {Title2}
                    </motion.h1>

                </div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-5xl font-bold text-orange-400 TitleBigMedia"
                >
                    {Title2}
                </motion.h1>
                <img src="/images/Hero/HeroHome/LogoLeft.svg" className='LogoSmallMedia StartProjectImg' alt='LogoLeft' />

            </div>
            {
                Des && <p>{HeroDescription}</p>
            }
        </div>
    )
}
