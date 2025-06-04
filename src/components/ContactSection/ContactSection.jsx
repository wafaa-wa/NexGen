import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";


export default function ContactSection() {
    return (
        <div className="ContactSection Card-Container M-Top2">
            <ContactInfo />
            <ContactForm />

        </div>
    )
}
