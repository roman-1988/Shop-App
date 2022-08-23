const Footer = () => {
    return <footer className="page-footer orange lighten-4">
        <div classname="footer-copyright">
            <div className="container">
                {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}

export default Footer;