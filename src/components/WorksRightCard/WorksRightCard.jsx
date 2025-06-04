import './WorksRightCard.css'

export default function WorksRightCard({ Title, texts, Text5, ProfileImages, CardText }) {
    return (
        <div className='WorksRightCard Flex-Column'>
            <div className='WorksRightCardTop Flex-Column'>
                <p className='White-P'>{Title}</p>
                <div className='Flex-Row'>
                    {
                        texts?.map((text, index1) => {
                            return (
                                <p key={index1} className='TextItem'>{text}</p>

                            )
                        })
                    }

                </div>
            </div>
            <div className='WorksRightCard2 Flex-Row'>
                <p className='White-P'>{Text5}</p>
                <div className='ProfileImages Flex-Row'>
                    {
                        ProfileImages?.map((image, index2) => {
                            return (
                                <img key={index2} src={image} />

                            )
                        })
                    }
                </div>
            </div>
            <p className='End-card-button'>{CardText}</p>

        </div>
    )
}

