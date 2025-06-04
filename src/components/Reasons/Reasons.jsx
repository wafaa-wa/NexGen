import { ReasonsCardsData } from '../../Data/ReasonsCardsData'
import ReasonsCard from '../ReasonsCard/ReasonsCard'
import StartSection from '../StartSection/StartSection'

export default function Reasons() {
    return (
        <div className='Reasons Style-Section  M-Top'>
            <StartSection X={true} SectionTitle="Reasons to Choose NexGen for Your Digital Journey" />
            <div className='Card-Container'>
                {
                    ReasonsCardsData.map((data1) => (
                        <ReasonsCard
                            key={data1.id}
                            R={data1.R}
                            ReaCardTitle={data1.ReaCardTitle}
                            ReaCardText={data1.ReaCardText}
                        />
                    ))
                }
            </div>
        </div>

    )
}
