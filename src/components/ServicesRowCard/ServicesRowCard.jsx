import ServicesCard from '../ServicesCard/ServicesCard'
import ServicseRightCard from '../ServicseRightCard/ServicseRightCard'
import './ServicesRowCard.css'

export default function ServicesRowCard({ IconImag, IconText, CardText, CardTitle, CardTextOnMobile, TitleTop, Imag1, Imag2, onClick }) {
    return (
        <div className='ServicesRowCard Card-Container'>
            <ServicesCard isHome={true} IconImag={IconImag} IconText={IconText} CardText={CardText} CardTitle={CardTitle} CardTextOnMobile={CardTextOnMobile} onClick={onClick} />
            <ServicseRightCard TitleTop={TitleTop} Imag1={Imag1} Imag2={Imag2} />
        </div>
    )
}
