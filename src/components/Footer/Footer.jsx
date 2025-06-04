import { FooterCardData, MobileFooterCardData } from '../../Data/FooterCardData'
import { FooterLinkColumnData } from '../../Data/FooterLinkColumnData'
import { InfinityRowScrollData } from '../../Data/InfinityRowScrollData'
import DigitalSection from '../DigitalSection/DigitalSection'
import EndFooter from '../EndFooter/EndFooter'
import FooterCard from '../FooterCard/FooterCard'
import FooterLinkColumn from '../FooterLinkColumn/FooterLinkColumn'
import InfinityRowScroll from '../InfinityRowScroll/InfinityRowScroll'
import MobileFooterCard from '../MobileFooterCard/MobileFooterCard'
import SubscribeFooter from '../SubscribeFooter/SubscribeFooter'

import './Footer.css'

export default function Footer() {
    return (
        <div className='Footer Padding50 M-Top Flex-Column'>
            <DigitalSection TitleDigital="Ready to Transform Your Digital Presence?"
                DescriptionFDigital="Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business."
                Btn="Get in Touch"
                ArrowImg="/images/Common/Arrow Icon.svg"
            />
            <InfinityRowScroll contents={InfinityRowScrollData.Footer} />
            <div className='Footer-Bottom Flex-Row'>
                <div className='AllCardFooter Flex-Column'>
                    <div className='Card-Container'>
                        {
                            FooterCardData.slice(0, 2).map((data7) => (
                                <FooterCard
                                    key={data7}
                                    MediaIcon={data7.MediaIcon}
                                    ArrowIcon1={data7.ArrowIcon1}
                                    TitleCard={data7.TitleCard}
                                    TextCard={data7.TextCard}

                                />
                            ))
                        }
                    </div>
                    <div className='Card-Container '>
                        {
                            FooterCardData.slice(2, 4).map((data7) => (
                                <FooterCard
                                    key={data7}
                                    MediaIcon={data7.MediaIcon}
                                    ArrowIcon1={data7.ArrowIcon1}
                                    TitleCard={data7.TitleCard}
                                    TextCard={data7.TextCard}

                                />
                            ))
                        }
                    </div>

                </div>
                <div className='MobileFooterCardContainer Flex-Row'>
                    {MobileFooterCardData.map((data10) => (
                        <MobileFooterCard key={data10} MediaIcon={data10.MediaIcon} />
                    ))}
                </div>
                <div className='FooterBottom-RightSide Flex-Column'>
                    <div className='AllFooterLinks Flex-Row'>
                        {
                            FooterLinkColumnData.map((data9) => (
                                <FooterLinkColumn
                                    ColumnLink={data9.ColumnLink}
                                    ColumnTitle={data9.ColumnTitle}
                                    links={data9.links}
                                    spanText={data9.spanText}

                                />
                            ))
                        }
                    </div>
                    <SubscribeFooter TextSubscribe="Newsletter" TitleSubscribe="Subscribe To our Newsletter"
                        PLaceholder="Enter your email" ImgArrow="/images/Common/Arrow Icon.svg"
                    />
                    <EndFooter LeftText="© 2024 NexGen. All rights reserved."
                        RightText1="Terms & Conditions" RightText2="Privacy Policy" />

                </div>

            </div>

        </div>
    )
}

