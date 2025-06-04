import './FooterCard.css'

export default function FooterCard({ isFeturesCard, F, MediaIcon, ArrowIcon1, TitleCard, TextCard }) {
    return (
        <div className={isFeturesCard ? 'KeyFeaturesCard Flex-Column' : 'FooterCard Flex-Column'}>
            {
                !F && <div className='FooterCard-Top Flex-Row'>
                    <button className='Btn-Icon'><img src={MediaIcon} /></button>
                    <button className='button-Container'><img src={ArrowIcon1} /></button>
                </div>
            }
            {
                F && <button className='Btn-Icon'><img src={MediaIcon} /></button>
            }
            <div className='FooterCard-Botttom Flex-Column'>
                <h3>{TitleCard}</h3>
                <p>{TextCard}</p>
            </div>


        </div>
    )
}
