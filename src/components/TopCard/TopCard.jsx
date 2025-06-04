import './TopCard.css'
import Arrow from '../Arrow/Arrow'

export default function TopCard({ IconImag, IconText, ArrowIcon, ArrowText, onClick }) {
    return (
        <div className='TopCard'>
            <div className='Container-Icon'>
                <button className='Btn-Icon'><img src={IconImag} /></button>
                <h3>{IconText}</h3>
            </div>
            <Arrow ArrowIcon={ArrowIcon} ArrowText={ArrowText} onClick={onClick} />
        </div>
    )
}
