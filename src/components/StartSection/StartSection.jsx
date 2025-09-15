import { useEffect, useState } from 'react';
import Arrow from '../Arrow/Arrow'
import './StartSection.css'
import FulterBtnSuccess from '../FulterBtnSuccess/FulterBtnSuccess';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

export default function StartSection({ X, SectionTitle, T, ArrowIcon, ArrowText, isProjectShow, filters, defaultFilter, onFilterChange }) {
    console.log("Filters received:", filters);
    const [activeFilter, setActiveFilter] = useState(defaultFilter || filters?.[0] || "");
    const [startTyping, setStartTyping] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setStartTyping(true);
        }
    }, [inView]);
    return (
        <div className={X ? "StartSection" : "StartSection1"} ref={ref}>
            <h2 className="SectionTitle">
                {startTyping && (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(SectionTitle)
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            showCursor: false,
                            delay: 30,
                        }}
                    />
                )}
            </h2>
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
