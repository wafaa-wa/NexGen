import { useState } from 'react';
import Arrow from '../Arrow/Arrow'
import './StartSection.css'
import FulterBtnSuccess from '../FulterBtnSuccess/FulterBtnSuccess';

export default function StartSection({ X, SectionTitle, T, ArrowIcon, ArrowText, isProjectShow, filters, defaultFilter, onFilterChange }) {
    console.log("Filters received:", filters);
    const [activeFilter, setActiveFilter] = useState(defaultFilter || filters?.[0] || "");
    return (
        <div className={X ? "StartSection" : "StartSection1"}>
            <h2 className='SectionTitle'>{SectionTitle}</h2>
            {T && <Arrow G={true} ArrowIcon={ArrowIcon} ArrowText={ArrowText} />}
            {
                isProjectShow && <div className="FilterButtonsProects BigMedia">
                    {filters.map((filter) => (
                        <FulterBtnSuccess
                            key={filter}
                            isActive={activeFilter === filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                onFilterChange(filter);
                            }}
                        >
                            {filter}
                        </FulterBtnSuccess>
                    ))}
                </div>
            }

        </div>
    )
}
