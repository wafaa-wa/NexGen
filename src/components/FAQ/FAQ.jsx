import { useEffect, useRef, useState } from 'react';
import StartSection from '../StartSection/StartSection'
import './FAQ.css'
import FAQItemOpen from '../FAQItemOpen/FAQItemOpen';
import { FAQItemData } from '../../Data/FAQItemData';
import axios from 'axios';

export default function FAQ({ FormTitle, label1, placholder1, label2, placholder2, label3, placholder3, EndTextButton }) {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const name = useRef(null);
    const email = useRef(null);
    const question = useRef(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const sendData = (event) => {
        event.preventDefault();
        axios.post("https://api2-test.leoron.eu/api/questions", {
            name: name.current?.value,
            email: email.current?.value,
            question: question.current?.value,
        },
            {
                headers: {
                    Accept: "application/json",
                }
            })

            .then(res => {
                setResponseMessage(res?.data?.message);
                console.log(res.data);
                setShowToast(true);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='FAQ M-Top Style-Section2'>
            <StartSection SectionTitle="Frequently Asked Questions" T={true} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText="View All" />
            <div className='Card-Container FAQ-Container'>
                <div className='Accordion-Side Flex-Column'>
                    {FAQItemData.map((faq, index5) => (
                        <FAQItemOpen
                            key={index5}
                            FAQTitle={faq.FAQTitle}
                            FAQAnswer={faq.FAQAnswer}
                            FAQIconOpen={faq.FAQIconOpen}
                            FAQIconClosed={faq.FAQIconClosed}
                            isOpen={openIndex === index5}
                            toggleOpen={() => toggleOpen(index5)}
                        />
                    ))}
                </div>
                <div className='FAQ-Form-Side Flex-Column'>
                    <h4>{FormTitle}</h4>
                    <div className="FAQLine"></div>
                    <form className='Flex-Column' onSubmit={sendData}>
                        <div className='InputForm Flex-Column'>
                            <label >{label1}</label>
                            <input type="text" placeholder={placholder1} ref={name} required />
                        </div>
                        <div className='InputForm Flex-Column'>
                            <label >{label2}</label>
                            <input type="email" placeholder={placholder2} ref={email} required />
                        </div>
                        <div className='InputForm Flex-Column'>
                            <label >{label3}</label>
                            <textarea type="text" placeholder={placholder3} ref={question} required />
                        </div>
                        <button className='End-card-button' type='submit'>{EndTextButton}</button>
                    </form>

                </div>

            </div>
            {showToast && (
                <div className="ToastNotification">{responseMessage}</div>
            )}

        </div>
    )
}
