import {useTranslation} from "react-i18next";
import {HowWork} from "./HowWork";
import {CoffeeItem} from "./CoffeeItem";
import {useEffect, useState} from "react";

export function Laser() {
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
                    <section className="container laser">
                        <div className="laser__image">
                            <img src="./images/laser/laser.png" alt=""/>
                        </div>
                        <HowWork/>
                        <div className="laser-items__wrapper">
                            <CoffeeItem
                                title={t("work.l1")}
                                src={"./images/laser/001.svg"}
                                description={t("laser.item-description1")}
                            />

                            <CoffeeItem
                                title={t("work.l4")}
                                src={"./images/laser/004.svg"}
                                description={t("laser.item-description4")}
                            />
                            <CoffeeItem
                                title={t("work.l5")}
                                src={"./images/laser/005.svg"}
                                description={t("laser.item-description5")}
                            />
                            <CoffeeItem
                                title={t("work.l6")}
                                src={"./images/laser/006.svg"}
                                description={t("laser.item-description6")}
                            />
                        </div>
                        <div className="coffee-link">
                            <a className="coffee-link__all" href="https://www.lazer.ge" target="_blank">{t("coffee.coffee-link__all")}</a>
                        </div>
                        <div className="steps">
                            <div className="steps-title">
                                <p className="steps-title__text">{t("laser.steps-title")}</p>
                            </div>
                        </div>
                        <div className="steps-image">
                            <div className="steps-item">
                                <div className="steps-item__image">
                                    <img src="./images/laser/i1.svg" alt="image1"/>
                                </div>
                                <p className="steps-item__description">{t("laser.image-description1")}</p>
                            </div>
                            <div className="steps-item">
                                <div className="steps-item__image">
                                    <img src="./images/laser/i2.svg" alt="image2"/>
                                </div>
                                <p className="steps-item__description steps-item__description--second">{t("laser.image-description2")}</p>
                            </div>
                            <div className="steps-item">
                                <div className="steps-item__image">
                                    <img src="./images/laser/i3.svg" alt="image3"/>
                                </div>
                                <p className="steps-item__description steps-item__description-third">{t("laser.image-description3")}</p>
                            </div>
                            <div className="steps-item">
                                <div className="steps-item__image">
                                    <img src="./images/laser/i4.svg" alt="image4"/>
                                </div>
                                <p className="steps-item__description steps-item__description-fourth">{t("laser.image-description4")}</p>
                            </div>
                        </div>
                    </section>
                </div>
            ): <div className="loader">loading</div>}
        </div>

    )
}