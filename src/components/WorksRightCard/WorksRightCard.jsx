import './WorksRightCard.css'
import { motion } from 'framer-motion';

export default function WorksRightCard({ texts, Text5, ProfileImages, CardText }) {
    console.log("texts in WorksRightCard:", texts);
    return (
        <motion.div className='WorksRightCard Flex-Column'
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
            <div className='WorksRightCardTop Flex-Column'>
                <p className='White-P'>Technologies Used</p>
                <div className='Flex-Row'>
                    {
                        texts?.map((text, index1) => {
                            return (
                                <p key={index1} className='TextItem'>{text}</p>

                            )
                        })
                    }

                </div>
            </div>
            <div className='WorksRightCard2 Flex-Row'>
                <p className='White-P'>{Text5}</p>
                <div className='ProfileImages Flex-Row'>
                    {
                        ProfileImages?.map((image, index2) => {
                            return (
                                <img key={index2} src={image} alt='ProfileImage' />

                            )
                        })
                    }
                </div>
            </div>
            <button className='End-card-button'>
                <a
                    href="https://wa.me/963933259354?text=Hello%20NexGen%20Team%2C%20I'd%20love%20to%20book%20a%20call%20to%20learn%20more%20about%20your%20services%20and%20see%20how%20we%20can%20collaborate."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book A Call
                </a>
            </button>

        </motion.div>
    )
}

