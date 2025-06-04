import { useNavigate } from "react-router-dom";
import { ServicesCardsData } from "../../Data/ServicesCardsData";
import ServicesCard from "../ServicesCard/ServicesCard";
import StartSection from "../StartSection/StartSection";

export default function HomeServices() {
    const navigate = useNavigate();
    return (
        <div className="HomeServices M-Top Style-Section">
            <StartSection SectionTitle="Our Services" />
            <div className="Card-Container">
                {
                    ServicesCardsData.slice(0, 2).map((data2) => (
                        <ServicesCard
                            key={data2.id}
                            {...data2}
                            onClick={() => navigate("/services")}




                        />
                    ))
                }
            </div>
            <div className="Card-Container">
                {
                    ServicesCardsData.slice(2, 4).map((data2) => (
                        <ServicesCard
                            key={data2.id}
                            {...data2}
                            onClick={() => navigate("/services")}


                        />
                    ))
                }
            </div>
        </div>
    )
}
