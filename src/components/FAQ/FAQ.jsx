import { useState } from 'react';
import StartSection from '../StartSection/StartSection'
import './FAQ.css'
import FAQItemOpen from '../FAQItemOpen/FAQItemOpen';
import { FAQItemData } from '../../Data/FAQItemData';

export default function FAQ({ FormTitle, label1, placholder1, label2, placholder2, label3, placholder3, EndTextButton }) {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
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
                    <form className='Flex-Column'>
                        <div className='InputForm Flex-Column'>
                            <label >{label1}</label>
                            <input type="text" placeholder={placholder1} />
                        </div>
                        <div className='InputForm Flex-Column'>
                            <label >{label2}</label>
                            <input type="number" placeholder={placholder2} />
                        </div>
                        <div className='InputForm Flex-Column'>
                            <label >{label3}</label>
                            <textarea type="text" placeholder={placholder3} />
                        </div>
                    </form>
                    <p className='End-card-button'>{EndTextButton}</p>
                </div>

            </div>

        </div>
    )
}
