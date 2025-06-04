import './Arrow.css'

export default function Arrow({ G, ArrowIcon, ArrowText, onClick }) {
    return (
        <div className={G ? 'Arrow' : 'Arrow1'} onClick={onClick}>
            <button className='ArrowIcon'>
                <img src={ArrowIcon} />
            </button>
            <p className='ArrowText' onClick={onClick}>{ArrowText}</p>
        </div>
    )
}
