import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Social} from "./Social";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
    const { t } = useTranslation();
    const [showMap, setShowMap] = useState(false)

    function onMapClick() {
        setShowMap(!showMap)
    }
    const location = useLocation();
    const getPhoneNumbers = () => {
        switch (location.pathname) {
            case "/":
            case "/about_us":
            case "/vocation":
                return ["+955 555 7555 77", "+955 555 7555 55"];
            case "/laser":
                return ["+995 591 96 68 88"];
            case "/chemical":
                return ["+995 588 882 393"];
            case "/confectionary":
                return ["+995 568 804 260"];
        }
    };

    const phoneNumbers = getPhoneNumbers();
    return (
        <footer id="contacts" className="footer" style={{backgroundImage: 'url(./images/footer.png)'}}>
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
                            {phoneNumbers.length === 1 ? (
                                <a href={`tel:${phoneNumbers[0].replace(/\s+/g, '')}`}>
                                    <p className="footer-tel__number">{phoneNumbers[0]}</p>
                                </a>
                            ) : (
                                <>
                                    <a href={`tel:${phoneNumbers[0].replace(/\s+/g, '')}`}>
                                        <p className="footer-tel__number">{phoneNumbers[0]}</p>
                                    </a>
                                    <a href={`tel:${phoneNumbers[1].replace(/\s+/g, '')}`}>
                                        <p className="footer-tel__number">{phoneNumbers[1]}</p>
                                    </a>
                                </>
                            )}
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-design">
                <div className="container">
                    <p className="footer-design__text"> Designed by Kseniia Marakhovska, 2023</p>
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