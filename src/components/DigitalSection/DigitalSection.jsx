import './DigitalSection.css'

export default function DigitalSection({ TitleDigital, DescriptionFDigital, Btn, ArrowImg }) {
    return (
        <div className='DigitalSection Flex-Row'>
            <div className='DigitalSection-Left-Side Flex-Column'>
                <h2>{TitleDigital}</h2>
                <p>{DescriptionFDigital}</p>
            </div>
            <button className='BtnDigitalSection Flex-Row'>{Btn}<img src={ArrowImg} alt='ArrowImg'/></button>
        </div>
    )
}
