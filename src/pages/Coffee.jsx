import {CoffeeItem} from "../components/CoffeeItem";
import Fade from "react-reveal/Fade";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


export function Coffee( { } ) {
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
                    <section className="coffee">
                        <Fade right>
                            <h4 className="work__title">{t("coffee.work-title")}</h4>
                        </Fade>
                        <div className="container coffee-image">
                            <img className="coffee-image__picture" src="bbscopy/images/coffee/coffee-main.png" alt="coffee main"/>
                            <div className="coffee-link">
                                <a className="coffee-link__all" href="#">{t("coffee.coffee-link__all")}</a>
                            </div>
                        </div>

                        <div className="container coffee-items">
                            <CoffeeItem
                                title={t("coffee.item-title1")}
                                src={"bbscopy/images/coffee/1.png"}
                                description={t("coffee.item-description1")}
                            />

                            <CoffeeItem
                                title={t("coffee.item-title2")}
                                src={"bbscopy/images/coffee/2.png"}
                                description={t("coffee.item-description2")}
                            />

                            <CoffeeItem
                                title={t("coffee.item-title3")}
                                src={"bbscopy/images/coffee/3.png"}
                                description={t("coffee.item-description3")}
                            />
                        </div>
                        <div className="container coffee-bg">
                            <img src="bbscopy/images/coffee/coffee-footer.png" alt="coffee footer"/>
                        </div>
                        <div className="coffee-goods">
                            <div className="container">
                                <Fade right>
                                    <h5 className="work-item__info-title">{t("coffee.work-item__info-title")}</h5>
                                </Fade>
                                <div className="coffee-goods__wrapper">
                                    <div className="coffee-goods__item">
                                        <img src="bbscopy/images/coffee/goods1.svg" alt="goods1"/>
                                        <p>{t("coffee.goods-item1")}</p>
                                    </div>

                                    <div className="coffee-goods__item">
                                        <img src="bbscopy/images/coffee/goods2.svg" alt="goods2"/>
                                        <p>{t("coffee.goods-item2")}</p>
                                    </div>

                                    <div className="coffee-goods__item">
                                        <img src="bbscopy/images/coffee/goods3.svg" alt="goods3"/>
                                        <p>{t("coffee.goods-item3")}</p>
                                    </div>

                                    <div className="coffee-goods__item">
                                        <img src="bbscopy/images/coffee/goods4.svg" alt="goods4"/>
                                        <p>{t("coffee.goods-item4")}</p>
                                    </div>

                                    <div className="coffee-goods__item">
                                        <img src="bbscopy/images/coffee/goods5.svg" alt="goods5"/>
                                        <p>{t("coffee.goods-item5")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : <div className="loader">loading</div>}
        </div>
    )
}