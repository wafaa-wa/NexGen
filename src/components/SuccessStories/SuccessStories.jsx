import { SuccesCardsData } from '../../Data/SuccesCardsData'
import EndSection from '../EndSection/EndSection'
import RowCardsSuccess from '../RowCardsSuccess/RowCardsSuccess'
import StartSection from '../StartSection/StartSection'

export default function SuccessStories() {
    return (
        <div className='SuccessStories Style-Section2 M-Top'>
            <StartSection SectionTitle="Success Stories" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="View All" />
            {SuccesCardsData.slice(0, 1).map((data) => (
                <RowCardsSuccess key={data.id} data={data} />
            ))}
            {SuccesCardsData.slice(1, 2).map((data) => (
                <RowCardsSuccess key={data.id} data={data} />
            ))}
            <EndSection BottomArrow="/images/Common/Bottom Arrow.svg" TextEndSection="View All" />


        </div>
    )
}
