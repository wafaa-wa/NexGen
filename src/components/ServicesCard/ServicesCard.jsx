
import Arrow from '../Arrow/Arrow'
import RowWithCircle from '../RowWithCircle/RowWithCircle'
import TopCard from '../TopCard/TopCard'
import './ServicesCard.css'

export default function ServicesCard({ isHome, IconImag, IconText, ArrowText, onClick, RowCircle, CardText, CardTitle, CardTextOnMobile, EndCardBtn }) {
    return (
        <div className={isHome ? 'ServicesCard Flex-Column' : 'JoinCard Flex-Column'}>
            <TopCard IconImag={IconImag} IconText={IconText} ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText={ArrowText} onClick={onClick} />
            {
                !isHome &&
                <div className='RowCircleJoin'>
                    {
                        RowCircle.map((rowdata) => (
                            <RowWithCircle
                                key={rowdata}
                                {...rowdata}
                            />
                        ))
                    }
                </div>

            }
            <div className='ServCardBottom Flex-Column'>
                <p>{CardText}</p>
                <h3>{CardTitle}</h3>
            </div>
            {
                isHome && <p className='CardText-OnMobile'>{CardTextOnMobile}</p>
            }
            {
                !isHome && <div className='ArorowOnMobile'>
                    <Arrow ArrowIcon="/images/Common/Arrow Icon.svg" ArrowText={ArrowText} />
                </div>
            }
            {
                !isHome && <button className='End-card-button'>{EndCardBtn}</button>
            }

        </div>
    )
}
