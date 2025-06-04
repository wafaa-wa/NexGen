import './EndFooter.css'

export default function EndFooter({ LeftText, RightText1, RightText2 }) {
    return (
        <div className='EndFooter Flex-Row'>
            <p>{LeftText}</p>
            <div className='EndFooter-RightSide Flex-Row'>
                <p>{RightText1}</p>
                <div className='FooterLine'></div>
                <p>{RightText2}</p>
            </div>
        </div>
    )
}
