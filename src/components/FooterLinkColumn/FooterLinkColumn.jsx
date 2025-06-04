import { Link } from 'react-router-dom'
import './FooterLinkColumn.css'

export default function FooterLinkColumn({ ColumnLink, ColumnTitle, links, spanText }) {
    return (
        <div className='FooterLinkColumn Flex-Column'>
            <Link to={ColumnLink} className="footer-title-link">{ColumnTitle}</Link>
            <ul className='Flex-Column'>
                {links.map((link, index) => (
                    <li key={index}>{link}{(ColumnTitle === "Blogs" && index >= links.length - 2) && (
                        <span className="AddText">{spanText}</span>
                    )}</li>
                ))}

            </ul>
        </div>
    )
}
