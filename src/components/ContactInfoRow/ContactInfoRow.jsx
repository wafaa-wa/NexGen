import './ContactInfoRow.css'

export default function ContactInfoRow({ RequestType, RequestContent }) {
    return (
        <div className='ContactInfoRow Flex-Column'>
            <p className='RequestType'>{RequestType}</p>
            <div className=' ContactInfoRowField Flex-Row'>
                <p>{RequestContent}</p>
                <button className='Btn-Icon'><img src="/images/Common/Arrow Icon.svg" /></button>

            </div>
        </div>
    )
}
