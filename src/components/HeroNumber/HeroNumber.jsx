import HeroNumberCard from '../HeroNumberCard/HeroNumberCard'
import './HeroNumber.css'

export default function HeroNumber({ ClassNameNumber, Numbers, ClasNameNumberCard,ArrowIcon }) {
    return (
        <div className={ClassNameNumber}>
            {
                Numbers.map((dataNumber) => (
                    <HeroNumberCard
                        key={dataNumber}
                        ClasNameNumberCard={ClasNameNumberCard}
                        ArrowIcon={ArrowIcon}
                        {...dataNumber} />
                ))
            }
        </div>
    )
}
