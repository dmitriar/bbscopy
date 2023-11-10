
import {Social} from "./Social";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
    const [active, setActive] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    const location = useLocation();

    function onLanguageClick() {
        setOpenLanguage(!openLanguage)
    }

    function onBurgerClick() {
        setActive(!active)
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="container container--header-top">
                    <Link className="header-top__link" to="/">
                        <div className="header-top__logo">
                            <img src="./images/logo.svg" alt="logo"/>
                        </div>
                    </Link>
                    <div className="header-top__title">{t("title")}</div>
                    <div className="header-top__social">
                        <Social/>
                    </div>
                </div>
            </div>
            <div className="container header-bottom">
                <div className={`burger ${active ? 'block' : ''}`} onClick={onBurgerClick}>
                    <span className={`${active ? 'active' : ''}`}></span>
                </div>
                <nav className="header-bottom__nav">
                    <ul className={`header-bottom__list ${active ? 'nav-visible' : ''}`}>
                        {location.pathname === "/" ? "" : <Link className="header-bottom__link"
                               to={'/'}
                               onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Home")}</li>
                        </Link>}
                        {/*<Link className="header-bottom__link"*/}
                        {/*      to={'/solutions'}*/}
                        {/*      onClick={active && onBurgerClick}>*/}
                        {/*    <li className="header-bottom__list-item">{t("nav.Solutions")}</li>*/}
                        {/*</Link>*/}
                        {/*<Link className="header-bottom__link"*/}
                        {/*      to={'/directions'}*/}
                        {/*      onClick={active && onBurgerClick}>*/}
                        {/*    <li className="header-bottom__list-item">{t("nav.Directions")}</li>*/}
                        {/*</Link>*/}
                        {/*<a onClick={active ? onBurgerClick : undefined} className="header-bottom__link" href="#contacts">*/}
                        {/*    <li className="header-bottom__list-item">{t("nav.Contacts")}</li>*/}
                        {/*</a>*/}
                        {/*<Link className="header-bottom__link"*/}
                        {/*      to={'/become_a_partner'}*/}
                        {/*      onClick={active && onBurgerClick}>*/}
                        {/*    <li className="header-bottom__list-item">{t("nav.BecomeAPartner")}</li>*/}
                        {/*</Link>*/}
                        <Link className="header-bottom__link"
                              to={'/about_us'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.AboutUs")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/vocation'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Vocation")}</li>
                        </Link>
                    </ul>
                    <div onClick={onLanguageClick} className="header-bottom__language">{t("language")}
                        <ul className={`header-bottom__language-list ${openLanguage ? 'flex' : ''}`}>
                            {/*
                            <li className="header-bottom__language-item" onClick={() => changeLanguage("en")}>ENG</li>
                            */}
                            <li className="header-bottom__language-item" onClick={() => changeLanguage("ge")}>GE</li>
                            <li className="header-bottom__language-item" onClick={() => changeLanguage("ru")}>RU</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}