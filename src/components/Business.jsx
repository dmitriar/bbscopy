import Fade from 'react-reveal/Fade';
import {useTranslation} from "react-i18next";
export function Business() {
    const { t } = useTranslation();
    return (
        <section className="business">
            <div className="container business-info">
                <Fade left>
                    <div className="business-info__title">{t("vocation.business")}</div>
                </Fade>
                <Fade right delay={1000}>
                    <div className="business-info__middle">{t("vocation.humans")}</div>
                </Fade>
                <Fade left delay={1500}>
                    <div className="business-info__footnote">{t("vocation.evolution")}</div>
                </Fade>
            </div>
        </section>
    )
}