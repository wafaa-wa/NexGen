import { useNavigate } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import StartSection from "../StartSection/StartSection";
import { ServicesCardsData } from "../../Data/ServicesCardsData";

export default function HomeServices() {
    const navigate = useNavigate();

    return (
        <div className="HomeServices M-Top Style-Section">
            <StartSection SectionTitle="Our Services" />
            <div className="Card-Container">
                {
                    ServicesCardsData.slice(0, 2).map((serviceHome) => (
                        <ServicesCard
                            key={serviceHome.id}
                            {...serviceHome}
                            onClick={() => navigate("/services")}




                        />
                    ))
                }
            </div>
            <div className="Card-Container">
                {
                    ServicesCardsData.slice(2, 4).map((serviceHome) => (
                        <ServicesCard
                            key={serviceHome.id}
                            {...serviceHome}
                            onClick={() => navigate("/services")}




                        />
                    ))
                }
            </div>
        </div>
    )
}
