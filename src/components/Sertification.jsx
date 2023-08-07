import {useTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";
export function Sertification() {
    const { t } = useTranslation();
    return (
        <section className="sertification">
            <div className="services-title">
                <div className="container">
                    <Fade left>
                        <h5 className="work__title">{t("chemical.sertification-title")}</h5>
                    </Fade>
                </div>
            </div>
            <div className="sertification-wrapper">
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert1.svg" alt="sert1"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert2.svg" alt="sert2"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert3.svg" alt="sert3"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert4.svg" alt="sert4"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert5.svg" alt="sert5"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert6.svg" alt="sert6"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert7.svg" alt="sert7"/>
                </div>
                <div className="sertification-wrapper__item">
                    <img src="bbscopy/images/chemical/sert8.svg" alt="sert8"/>
                </div>
            </div>
            <div className="standart">
                <p className="standart__title">{t("chemical.standart-title")}</p>
            </div>
            <div className="iso-wrapper">
                <div className="iso-wrapper__image">
                    <img src="bbscopy/images/chemical/iso1.svg" alt="iso1"/>
                </div>
                <div className="iso-wrapper__image">
                    <img src="bbscopy/images/chemical/iso2.svg" alt="iso2"/>
                </div>
                <div className="iso-wrapper__image">
                    <img src="bbscopy/images/chemical/iso3.svg" alt="iso3"/>
                </div>
            </div>
        </section>
    )
}