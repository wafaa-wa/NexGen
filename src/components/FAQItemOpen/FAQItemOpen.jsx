import './FAQItemOpen.css'

export default function FAQItemOpen({ FAQTitle, FAQAnswer, isOpen, toggleOpen, FAQIconOpen, FAQIconClosed }) {
    return (
        <div className={`FAQItemOpen ${isOpen ? 'open Flex-Row' : 'closed Flex-Row'}`}>
            <div className="FAQLeftSide Flex-Column">
                <div className='TitleContainerFAQ Flex-Row'>
                    <h4 className="FAQTitle">{FAQTitle}</h4>
                    <button className="FAQIcon In-Small-Screen button-Container" onClick={toggleOpen}>
                        <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
                    </button>

                </div>
                {isOpen && (
                    <>
                        <div className="FAQLine"></div>
                        <p className="FAQAnswer">{FAQAnswer}</p>
                    </>
                )}
            </div>
            <button className="FAQIcon In-Big-Screen button-Container" onClick={toggleOpen}>
                <img src={isOpen ? FAQIconOpen : FAQIconClosed} alt="Toggle Icon" />
            </button>
        </div>
    )
}
