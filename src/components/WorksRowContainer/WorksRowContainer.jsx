import WorksLeftCard from '../WorksLeftCard/WorksLeftCard'
import WorksRightCard from '../WorksRightCard/WorksRightCard'
import './WorksRowContainer.css'

export default function WorksRowContainer({ IconImag, IconText, ArrowText, onClick, RowCircle, Description, WorksImg, showRightCard, Title, texts, Text5, ProfileImages, CardText }) {
    return (
        <div className='WorksRowContainer Flex-Row'>
            <WorksLeftCard IconImag={IconImag} IconText={IconText} ArrowText={ArrowText} onClick={onClick} RowCircle={RowCircle} Description={Description} />
            <img src={WorksImg} className='WorksImg' />
            {showRightCard && (
                <WorksRightCard Title={Title} texts={texts} Text5={Text5} ProfileImages={ProfileImages} CardText={CardText} />
            )}
        </div>
    )
}
