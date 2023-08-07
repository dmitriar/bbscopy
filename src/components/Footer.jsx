import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Social} from "./Social";

export function Footer() {
    const { t } = useTranslation();
    const [showMap, setShowMap] = useState(false)

    function onMapClick() {
        setShowMap(!showMap)
    }
    return (
        <footer id="contacts" className="footer" style={{backgroundImage: 'url(bbscopy/images/footer.png)'}}>
            <div className="footer-wrapper">
                <div className="container">
                    <p className="footer__title">{t("footer.title")}</p>
                    <div className="footer-box">
                        <div className="footer-address">
                            <p className="footer-address__title">{t("footer.find")}</p>
                            <address className="footer-address__address">{t("footer.address")} &nbsp; {t("footer.address-text")} </address>
                            <div onClick={onMapClick} className="footer-address__map">{t("footer.map")}</div>
                        </div>
                        <div className="footer-tel">
                            <a href="tel:+955555755577">
                                <p className="footer-tel__number">+955 555 7555 77</p>
                            </a>
                            <a href="tel:+955555755555">
                                <p className="footer-tel__number">+955 555 7555 55</p>
                            </a>
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
            {showMap && <div className="popup">
                <p onClick={onMapClick} className="popup-close">&#10006;</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.570038136533!2d41.628569375613026!3d41.64342428007537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678613b93fee75%3A0xb34e739461e6cc10!2zNjAg0YPQuy4g0KfQsNCy0YfQsNCy0LDQtNC30LUsIEJhdHVtaSwg0JPRgNGD0LfQuNGP!5e0!3m2!1sru!2sie!4v1690814018092!5m2!1sru!2sie"
                    width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>}
        </footer>
    )
}