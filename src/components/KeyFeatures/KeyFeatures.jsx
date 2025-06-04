import { KeyFeaturesCardsData } from '../../Data/KeyFeaturesCardsData'
import FooterCard from '../FooterCard/FooterCard'
import StartSection from '../StartSection/StartSection'

export default function KeyFeatures() {
    return (
        <div className='KeyFeatures Style-Section M-Top'>
            <StartSection SectionTitle="Key Features of Our Projects" />
            <div className='Card-Container'>
                {KeyFeaturesCardsData.map((data15, index) => ( 
                    <FooterCard
                        key={index} 
                        isFeturesCard={true}
                        F={true}
                        MediaIcon={data15.MediaIcon}
                        TitleCard={data15.TitleCard}
                        TextCard={data15.TextCard}
                    />
                ))}
            </div>

        </div>
    )
}
