import './EndSection.css'

export default function EndSection({ BottomArrow, TextEndSection, onToggle }) {
    return (
        <div className='EndSection'>
            <button className='BottomArrow' onClick={onToggle}>
                <img src={BottomArrow} /></button>
            <p>{TextEndSection}</p>
        </div>
    )
}
