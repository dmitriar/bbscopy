import {useTranslation} from "react-i18next";
import {AboutWorkItem} from "../components/AboutWorkItem";
import Fade from "react-reveal/Fade";

export function AboutAs() {
    const { t } = useTranslation();
    return (
        <section className="about">
            <div className="about-team">
                <Fade right>
                    <h4 className="about-team__title">{t("about.title")}</h4>
                </Fade>
                <div className="about-team__image">
                    <img src="bbscopy/images/about/team.svg" alt="team" className="about-team__image-picture"/>
                </div>
            </div>
            <div className="about-work">
                <Fade up>
                    <h4 className="about-team__title">{t("about.how")}</h4>
                </Fade>
                <div className="about-work__box">
                    <AboutWorkItem
                        title={t("about.values.title")}
                        description={t("about.values.description")}
                        img={"bbscopy/images/about/a7.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.impotant.title")}
                        description={t("about.impotant.description")}
                        img={"bbscopy/images/about/a6.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.balance.title")}
                        description={t("about.balance.description")}
                        img={"bbscopy/images/about/a5.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.ethics.title")}
                        description={t("about.ethics.description")}
                        img={"bbscopy/images/about/a4.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.correctness.title")}
                        description={t("about.correctness.description")}
                        img={"bbscopy/images/about/a3.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.development.title")}
                        description={t("about.development.description")}
                        img={"bbscopy/images/about/a2.svg"}
                    />
                    <AboutWorkItem
                        title={t("about.professionalism.title")}
                        description={t("about.professionalism.description")}
                        img={"bbscopy/images/about/a1.svg"}
                    />
                </div>
            </div>
        </section>
    )
}