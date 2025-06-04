import './FulterBtnSuccess.css'

export default function FulterBtnSuccess({ children, isActive, onClick }) {
    return (
        <button
            className={`FulterBtnSuccess ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
