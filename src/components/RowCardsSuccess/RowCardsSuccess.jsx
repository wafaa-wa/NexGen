import SuccessCardRight from '../SuccessCardRight/SuccessCardRight'
import WorksLeftCard from '../WorksLeftCard/WorksLeftCard'
import './RowCardsSuccess.css'

export default function RowCardsSuccess({ data }) {
    
    return (
        <div className='RowCardsSuccess Flex-Row'>
            <WorksLeftCard
                isSuccess={true}
                T={true}
                IconImag={data.iconSrc}
                IconText={data.companyName}
                ArrowText={data.websiteText}
                RowCircle={data.RowCircle}

            />
            <SuccessCardRight data={data} />
        </div>
    )
}
