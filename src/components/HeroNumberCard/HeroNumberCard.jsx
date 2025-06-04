import Arrow from '../Arrow/Arrow'
import './HeroNumberCard.css'

export default function HeroNumberCard({ isNumber, ClasNameNumberCard, TitleCard, TheNumber,ArrowIcon }) {
    return (
        <div className={ClasNameNumberCard}>
            {isNumber && <p>{TitleCard}</p>}
            {isNumber && <h2>{TheNumber}</h2>}
            {
                !isNumber && <Arrow G={true} ArrowIcon={ArrowIcon} ArrowText="Know More" />
            }

        </div>
    )
}
