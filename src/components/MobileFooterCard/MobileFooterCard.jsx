import './MobileFooterCard.css'

export default function MobileFooterCard({ MediaIcon }) {
    return (
        <button className='MobileFooterCard Btn-Icon'><img src={MediaIcon} alt='MediaIcon'/></button>
    )
}
