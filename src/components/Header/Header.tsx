import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

const Header = ({pageTitle}: {pageTitle: string}) => {

    const location = useLocation();

    /**
     * Create a function that gets
     * @param string getLocation
     * and
     * @return string link-highlight class
     * that mark a single link
     */
    const highlightTheLink = (getLocation: string) => location.pathname === getLocation ? 'link-highlight' : '';

    return (
        <header className="header">
            <div className="header__container-nav">    
                <nav className="header__nav">
                    <ul className="header__nav-menu">
                        <li className="header__nav-menu-item p--lg">
                            <Link to="/" rel="noopener noreferrer" className={`header__nav-menu-item-link link-no-style ${highlightTheLink('/')}`}>Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__container-content">    
                <h1 className="h1">CSC</h1>
                <h2 className="h2">{pageTitle}</h2>
            </div>
        </header>
    )
}

export default Header;