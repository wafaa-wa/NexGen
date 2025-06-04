import Arrow from '../Arrow/Arrow'
import './AchievementsCard.css'

export default function AchievementsCard({ isApply, Date, Title, Description }) {
    return (
        <div className={isApply ? 'ApplyCard Flex-Column' : 'AchievementsCard Flex-Column'}>
            <div className='AchievementsCard-Date'>
                <p>{Date}</p>
            </div>
            <div className='AchievementsCard-Title'>
                <h4>{Title}</h4>
            </div>
            <div className='AchievementsCard-Description Flex-Column'>
                <p>{Description}</p>
                {
                    isApply && <Arrow ArrowIcon="/images/Common/Bottom Arrow.svg" ArrowText="Know More" />

                }

            </div>

        </div>
    )
}
