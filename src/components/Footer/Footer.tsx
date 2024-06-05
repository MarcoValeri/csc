import "./Footer.scss";

const Footer = () => {

    const getYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container-credits">
                <p className="p">Made with <span className="footer__heart">&hearts;</span> in London - &copy; {getYear} - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;