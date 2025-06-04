import Arrow from '../Arrow/Arrow'
import './ReasonsCard.css'

export default function ReasonsCard({ R, ReaCardTitle, ReaCardText, T, ProfileImg, Name, Work, RightArrow }) {
    return (
        <div className={R ? 'ReasonsCard Flex-Column' : 'TestimonialsCard Flex-Column'}>
            <div className='ReaCardTop Flex-Column'>
                <h3>{ReaCardTitle}</h3>
                <p>{ReaCardText}</p>
            </div>
            {R && <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="Learn More" />}
            {T && <div className='TestimonialsCardBottom Flex-Row'>
                <div className='T-Left Flex-Row'>
                    <img src={ProfileImg} />
                    <div className='T-left-Text Flex-Column'>
                        <h5>{Name}</h5>
                        <p>{Work}</p>
                    </div>
                </div>
                <button className='RightArrow button-Container'>
                    <img src={RightArrow} />
                </button>
            </div>}

        </div>
    )
}
