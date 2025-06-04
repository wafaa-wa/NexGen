import './RowWithCircle.css'

export default function RowWithCircle({ Text1, Text2 }) {
    return (
        <div className='RowWithCircle Flex-Row'>
            <p>{Text1}</p>
            <div className='circle'></div>
            <p className='p-Bold'>{Text2}</p>
        </div>
    )
}
