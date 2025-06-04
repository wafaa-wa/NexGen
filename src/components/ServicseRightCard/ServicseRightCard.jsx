import Arrow from '../Arrow/Arrow'
import './ServicseRightCard.css'

export default function ServicseRightCard({ TitleTop, Imag1, Imag2 }) {
    return (
        <div className='ServicseRightCard Flex-Column'>
            <div className='CardServicesTop Flex-Row'>
                <h4>{TitleTop}</h4>
                <Arrow G={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="View All" />
            </div>
            <div className='CardServicesBotom Flex-Row'>
                <img src={Imag1} />
                <img src={Imag2} />

            </div>

        </div>
    )
}
