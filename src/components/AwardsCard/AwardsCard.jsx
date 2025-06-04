import './AwardsCard.css'

export default function AwardsCard({ Date, TheDate, ImageIcon, Title, Desciption }) {
    return (
        <div className='AwardsCard Flex-Column'>
            <div className="AwardsCard-Top Flex-Row" >
                <div className='Flex-Row Row1'>
                    <p>{Date}</p>
                    <div className='circle'></div>
                    <p className='p-Bold'>{TheDate}</p>
                </div>
                <button className="Btn-Icon"><img src={ImageIcon} /></button>
            </div>
            <div className="AwardsCard-Bottom Flex-Column">
                <h3>{Title}</h3>
                <p>{Desciption}</p>
            </div>
        </div>
    )
}
