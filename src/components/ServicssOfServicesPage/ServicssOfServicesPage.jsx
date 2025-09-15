import { ServicesRowCardsData } from '../../Data/ServicesRowCardsData'
import ServicesRowCard from '../ServicesRowCard/ServicesRowCard'
import StartSection from '../StartSection/StartSection'
import './ServicssOfServicesPage.css'

export default function ServicssOfServicesPage() {

    return (
        <div className='ServicssOfServicesPage Style-Section M-Top'>
            <StartSection SectionTitle="Our Services" />
            {
                ServicesRowCardsData.slice(0, 1).map((service) => (
                    <ServicesRowCard
                        key={service.id}
                        {...service}
                    />
                ))
            }
            {
                ServicesRowCardsData.slice(1, 2).map((service) => (
                    <ServicesRowCard
                        key={service.id}
                        {...service}



                    />
                ))
            }
            {
                ServicesRowCardsData.slice(2, 3).map((service) => (
                    <ServicesRowCard
                        key={service.id}
                        {...service}



                    />
                ))
            }
            {
                ServicesRowCardsData.slice(3, 4).map((service) => (
                    <ServicesRowCard
                        key={service.id}
                        {...service}


                    />
                ))
            }


        </div>
    )
}
