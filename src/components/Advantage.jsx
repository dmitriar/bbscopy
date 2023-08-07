import {AdvantageItem} from "./AdvantageItem";
import {useTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";

export function Advantage() {
    const { t } = useTranslation();
    return (
        <section className="advantage">
            <div className="services-title">
                <div className="container">
                    <Fade left>
                        <h5 className="work__title">{t("chemical.advantage-title")}</h5>
                    </Fade>
                </div>
            </div>
            <div className="advantage-box container">
                <AdvantageItem
                    src={"bbscopy/images/ada1.svg"}
                    title={t("chemical.item-title1")}
                    description={t("chemical.item-description1")}
                />

                <AdvantageItem
                    src={"bbscopy/images/ada2.svg"}
                    title={t("chemical.item-title2")}
                    description={t("chemical.item-description2")}
                />

                <AdvantageItem
                    src={"bbscopy/images/ada3.svg"}
                    title={t("chemical.item-title3")}
                    description={t("chemical.item-description3")}
                />

                <AdvantageItem
                    src={"bbscopy/images/ada4.svg"}
                    title={t("chemical.item-title4")}
                    description={t("chemical.item-description4")}
                />

                <AdvantageItem
                    src={"bbscopy/images/ada5.svg"}
                    title={t("chemical.item-title5")}
                    description={t("chemical.item-description5")}
                />

                <AdvantageItem
                    src={"bbscopy/images/ada6.svg"}
                    title={t("chemical.item-title6")}
                    description={t("chemical.item-description6")}
                />
            </div>
        </section>
    )
}