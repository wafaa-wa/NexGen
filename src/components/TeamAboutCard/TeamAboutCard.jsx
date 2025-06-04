import './TeamAboutCard.css'

export default function TeamAboutCard({ Name, Work, ProfileImg, items }) {
    return (
        <div className='TeamAboutCard Flex-Column'>
            <div className='TeamAboutCard-Top lex-Column'>
                <h4>{Name}</h4>
                <p>{Work}</p>
            </div>
            <img className='ProfileImg' src={ProfileImg} />
            <div className='TeamAboutCard-Bottom'>
                <div className='TeamAboutCard-Bottom-Container Flex-Row'>
                    {
                        items?.map((icon) => (
                            <button key={icon.id} className='button-Container'><img src={icon} /></button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
