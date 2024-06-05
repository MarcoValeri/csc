import './Header.scss';

const Header = ({pageTitle}: {pageTitle: string}) => {
    return (
        <header className="header">
            <div className="header__container-nav">    
                <nav className="header__nav">
                    <ul className="header__nav-menu">
                        <li className="header__nav-menu-item p--lg">Home</li>
                    </ul>
                </nav>
            </div>
            <div className="header__container-content">    
                <h1>CSC</h1>
                <h2>{pageTitle}</h2>
            </div>
        </header>
    )
}

export default Header;