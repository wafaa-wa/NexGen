import Arrow from '../Arrow/Arrow'
import RowWithCircle from '../RowWithCircle/RowWithCircle'
import TopCard from '../TopCard/TopCard'
import './WorksLeftCard.css'

export default function WorksLeftCard({ isSuccess, T, IconImag, IconText, ArrowText, RowCircle, Description, onClick }) {
    return (
        <div className={isSuccess ? 'SuccessLeftCard Flex-Column' : 'WorksLeftCard Flex-Column'}>
            <TopCard IconImag={IconImag} IconText={IconText} ArrowIcon="public/images/Common/Arrow Icon.svg" ArrowText={ArrowText} onClick={onClick} />
            <div className={T ? 'ContentLeftCard Flex-Row' : 'ContentLeftCard Flex-Column'}>
                {
                    RowCircle.map((row) => (
                        <RowWithCircle
                            key={row}
                            {...row}
                        />
                    ))
                }
            </div>
            {!T && <p>{Description}</p>}
            {
                !T && <div className="mobile">
                    <Arrow ArrowIcon="public/images/Common/Arrow Icon.svg" ArrowText={ArrowText} onClick={onClick} />
                </div>
            }

        </div>
    )
}
