import {ServicesItem} from "./ServicesItem";
import {ServicesSlider} from "./ServicesSlider";
import {useTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";

export function Services() {
    const { t } = useTranslation();
    return (
        <section className="services">
            <div className="attendance">
                <div className="services-title">
                    <div className="container">
                       <Fade left>
                           <h5 className="work__title">{t("chemical.title1")}</h5>
                       </Fade>
                    </div>
                </div>
                <ServicesSlider/>
            </div>
            <div className="complex">
                <div className="services-title">
                    <div className="container">
                        <Fade left>
                            <h5 className="work__title">{t("chemical.title2")}</h5>
                        </Fade>
                    </div>
                </div>
                <div className="container">
                    <div className="services-box">
                        <ServicesItem
                            src={"./images/services1.svg"}
                            description={t("chemical.service-description1")}
                        />

                        <ServicesItem
                            src={"./images/services2.svg"}
                            description={t("chemical.service-description2")}
                        />

                        <ServicesItem
                            src={"./images/services3.svg"}
                            description={t("chemical.service-description3")}
                        />

                        <ServicesItem
                            src={"./images/services4.svg"}
                            description={t("chemical.service-description4")}
                        />

                        <ServicesItem
                            src={"./images/services5.svg"}
                            description={t("chemical.service-description5")}
                        />
                    </div>
                </div>
                <div className="coffee-link">
                    <a className="coffee-link__all" href="https://grassbatumi.ge/" target="_blank">{t("coffee.coffee-link__all")}</a>
                </div>
            </div>
        </section>
    )
}