import { ServicesRowCardsData } from '../../Data/ServicesRowCardsData'
import ServicesRowCard from '../ServicesRowCard/ServicesRowCard'
import StartSection from '../StartSection/StartSection'
import './ServicssOfServicesPage.css'

export default function ServicssOfServicesPage() {
    return (
        <div className='ServicssOfServicesPage Style-Section M-Top'>
            <StartSection SectionTitle="Our Services" />
            {
                ServicesRowCardsData.slice(0, 1).map((data13) => (
                    <ServicesRowCard
                        key={data13}
                        IconImag={data13.IconImag}
                        IconText={data13.IconText}
                        CardText={data13.CardText}
                        CardTitle={data13.CardTitle}
                        CardTextOnMobile={data13.CardTextOnMobile}
                        TitleTop={data13.TitleTop}
                        Imag1={data13.Imag1}
                        Imag2={data13.Imag2}


                    />
                ))
            }
            {
                ServicesRowCardsData.slice(1, 2).map((data13) => (
                    <ServicesRowCard
                        key={data13}
                        IconImag={data13.IconImag}
                        IconText={data13.IconText}
                        CardText={data13.CardText}
                        CardTitle={data13.CardTitle}
                        CardTextOnMobile={data13.CardTextOnMobile}
                        TitleTop={data13.TitleTop}
                        Imag1={data13.Imag1}
                        Imag2={data13.Imag2}


                    />
                ))
            }
            {
                ServicesRowCardsData.slice(2, 3).map((data13) => (
                    <ServicesRowCard
                        key={data13}
                        IconImag={data13.IconImag}
                        IconText={data13.IconText}
                        CardText={data13.CardText}
                        CardTitle={data13.CardTitle}
                        CardTextOnMobile={data13.CardTextOnMobile}
                        TitleTop={data13.TitleTop}
                        Imag1={data13.Imag1}
                        Imag2={data13.Imag2}


                    />
                ))
            }
            {
                ServicesRowCardsData.slice(3, 4).map((data13) => (
                    <ServicesRowCard
                        key={data13}
                        IconImag={data13.IconImag}
                        IconText={data13.IconText}
                        CardText={data13.CardText}
                        CardTitle={data13.CardTitle}
                        CardTextOnMobile={data13.CardTextOnMobile}
                        TitleTop={data13.TitleTop}
                        Imag1={data13.Imag1}
                        Imag2={data13.Imag2}


                    />
                ))
            }


        </div>
    )
}
