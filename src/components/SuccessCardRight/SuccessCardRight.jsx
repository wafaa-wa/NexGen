import { useState } from 'react';
import FulterBtnSuccess from '../FulterBtnSuccess/FulterBtnSuccess'
import './SuccessCardRight.css'

export default function SuccessCardRight({ data }) {
    if (!data || !data.filterOptions) {
        return <p>Loading or No Data Available...</p>;
    }
    const [activeBtn, setActiveBtn] = useState("Solution");
    return (
        <div className='SuccessCardRight Flex-Column'>
            <div className='AllFulterBtn Flex-Row'>
                {Object.keys(data.filterOptions).map((btnLabel) => (
                    <FulterBtnSuccess isActive={activeBtn === btnLabel} onClick={() => setActiveBtn(btnLabel)}>
                        {btnLabel}
                    </FulterBtnSuccess>
                ))}
            </div>
            <div className='R-SuccessRight Flex-Column'>
                <h2>{data.filterOptions[activeBtn]?.title || "No Title Available"}</h2>
                <p>{data.filterOptions[activeBtn]?.text || "No Description Available"}</p>
            </div>
        </div>
    )
}
