import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="social-media">
                <img src="/images/fb.png"></img>
                <img src="/images/tw.png"></img>
                <img src="/images/ig.png"></img>
            </div>
            <div className="logo">
                <img src="/images/logo.png"></img>
            </div>
            <div className="copyright">
                <span>Desenvolvido por G Y Furuta Web Solutions em curso da Alura</span>
            </div>
        </div>
    )
}

export default Footer