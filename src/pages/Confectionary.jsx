import {useTranslation} from "react-i18next";
import {AspectsItem} from "../components/AspectsItem";
import {ForItems} from "../components/ForItems";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import {useEffect, useState} from "react";


export function Confectionary() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const delay = 1000; // Задержка в миллисекундах (1 секунда)
        const timeout = setTimeout(() => {
            setShowContent(true); // Показать контент после задержки
        }, delay);

        // Очистка таймера при размонтировании компонента
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Скролл вверх при монтировании компонента
    }, []);
    const { t } = useTranslation();
    return (
        <div>
            {showContent ? (
                <div>
                    <section className="container confectionary">
                        <div className="confectionary__main">
                            <img src="./images/confectionary/konditer.svg" alt="main"/>
                        </div>
                        <div className="aspects">
                            <AspectsItem
                                img={'./images/confectionary/aspects1.png'}
                                title={t("confectionary.aspects.title1")}
                                description={t("confectionary.aspects.description1")}
                                delay={0}
                            />
                            <AspectsItem
                                img={'./images/confectionary/aspects2.png'}
                                title={t("confectionary.aspects.title2")}
                                description={t("confectionary.aspects.description2")}
                                delay={500}
                            />
                            <AspectsItem
                                img={'./images/confectionary/aspects3.png'}
                                title={t("confectionary.aspects.title3")}
                                description={t("confectionary.aspects.description3")}
                                delay={1000}
                            />
                            <AspectsItem
                                img={'./images/confectionary/aspects4.png'}
                                title={t("confectionary.aspects.title4")}
                                description={t("confectionary.aspects.description4")}
                                delay={1500}
                            />
                        </div>
                        <div className="for">
                            <div className="for-wrapper">
                                <h5 className="for__title">{t("confectionary.for.title")}</h5>
                                <a href="https://www.konditer.ge" className="for__link">{t("confectionary.for.link")}</a>
                            </div>
                            <div className="for-items">
                                <ForItems
                                    img={'./images/confectionary/for1.svg'}
                                    description={t("confectionary.for.description1")}
                                    link={'https://konditer.ge/%E1%83%A7%E1%83%95%E1%83%94%E1%83%9A%E1%83%90%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98-%E1%83%91%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1-c154825517'}
                                />
                                <ForItems
                                    img={'./images/confectionary/for2.svg'}
                                    description={t("confectionary.for.description2")}
                                    link={'https://konditer.ge/%E1%83%A7%E1%83%95%E1%83%94%E1%83%9A%E1%83%90%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98-%E1%83%A0%E1%83%94%E1%83%A1%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%90%E1%83%9C%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1-c154824265'}
                                />
                                <ForItems
                                    img={'./images/confectionary/for3.svg'}
                                    description={t("confectionary.for.description3")}
                                    link={'https://konditer.ge/%E1%83%A7%E1%83%95%E1%83%94%E1%83%9A%E1%83%90%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98-%E1%83%A7%E1%83%90%E1%83%95%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1-c140055097'}
                                />
                                <ForItems
                                    img={'./images/confectionary/for4.svg'}
                                    description={t("confectionary.for.description4")}
                                    link={'https://konditer.ge/'}
                                />
                            </div>
                        </div>
                        <div className="confectionary-how">
                            <Fade right>
                                <p className="confectionary-how__title">{t("confectionary.for.how.title")}</p>
                            </Fade>
                            <div className="confectionary-how__items">
                                <Bounce left>
                                    <div className="confectionary-how__item">
                                        <div className="confectionary-how__item-image">
                                            <img src="./images/confectionary/how1.png" alt="basket"/>
                                        </div>
                                        <p className="confectionary-how__item-description">
                                            {t("confectionary.for.how.description1")}
                                        </p>
                                    </div>
                                </Bounce>

                                <Bounce left delay={500}>
                                    <div className="how-arrow">
                                        <img src="./images/confectionary/how4.png" alt=""/>
                                    </div>
                                </Bounce>

                                <Bounce left delay={1000}>
                                    <div className="confectionary-how__item">
                                        <div className="confectionary-how__item-image">
                                            <img src="./images/confectionary/how2.png" alt="basket"/>
                                        </div>
                                        <p className="confectionary-how__item-description">
                                            {t("confectionary.for.how.description2")}
                                        </p>
                                    </div>
                                </Bounce>

                                <Bounce left delay={1500}>
                                    <div className="how-arrow">
                                        <img src="./images/confectionary/how4.png" alt=""/>
                                    </div>
                                </Bounce>

                                <Bounce left delay={2000}>
                                    <div className="confectionary-how__item">
                                        <div className="confectionary-how__item-image">
                                            <img src="./images/confectionary/how3.png" alt="basket"/>
                                        </div>
                                        <p className="confectionary-how__item-description">
                                            {t("confectionary.for.how.description3")}
                                        </p>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                        <div className="confectionary-partners">
                            <Fade right>
                                <p className="confectionary-how__title">{t("confectionary.partners")}</p>
                            </Fade>
                            <div className="confectionary-partners__image">
                                <img src="./images/confectionary/partners.png" alt="partners"/>
                            </div>
                        </div>

                        <div className="confectionary-partners">
                            <Fade right>
                                <p className="confectionary-how__title">{t("confectionary.clients")}</p>
                            </Fade>
                            <div className="confectionary-partners__image">
                                <img src="./images/confectionary/clients.png" alt="partners"/>
                            </div>
                        </div>
                    </section>
                </div>
            ): <div className="loader">loading</div>}
        </div>

    )
}