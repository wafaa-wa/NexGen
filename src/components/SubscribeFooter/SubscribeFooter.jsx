import './SubscribeFooter.css'

export default function SubscribeFooter({ TextSubscribe, TitleSubscribe, PLaceholder, ImgArrow }) {
    return (
        <div className='SubscribeFooter Flex-Row'>
            <div className='Subscribe-left-Side Flex-Column'>
                <p>{TextSubscribe}</p>
                <h3>{TitleSubscribe}</h3>
            </div>
            <div className='Subscribe-Right-Side Flex-Row'>
                <input type="email" placeholder={PLaceholder} />
                <button className='button-Container'><img src={ImgArrow} /></button>

            </div>


        </div>
    )
}
