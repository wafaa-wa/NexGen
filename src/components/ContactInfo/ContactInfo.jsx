import { useState } from 'react';
import { ContactInfoData } from '../../Data/ContactInfoData';
import { filtersContactInfo } from '../../Data/FulterBtnData';
import ContactInfoRow from '../ContactInfoRow/ContactInfoRow';
import FulterBtnSuccess from '../FulterBtnSuccess/FulterBtnSuccess';
import './ContactInfo.css'

export default function ContactInfo() {
    const [activeFilter, setActiveFilter] = useState("Emails");
    return (
        <div className='ContactInfo Flex-Column'>
            <div className="FilterButtonsProects ContactFulterSmallMedia">
                {filtersContactInfo.map((filterInfo) => (
                    <FulterBtnSuccess
                        key={filterInfo}
                        isActive={activeFilter === filterInfo}
                        onClick={() => {
                            setActiveFilter(filterInfo);
                            onFilterChange(filterInfo)
                        }}
                    >
                        {filterInfo}
                    </FulterBtnSuccess>
                ))}
            </div>
            <div className='AllContactInfoContainer Flex-Column'>
                {
                    ContactInfoData.map((dataInfo) => (
                        <ContactInfoRow
                            key={dataInfo}
                            RequestType={dataInfo.RequestType[activeFilter]}
                            RequestContent={dataInfo.RequestContent[activeFilter]}

                        />
                    ))
                }

            </div>

        </div>
    )
}
