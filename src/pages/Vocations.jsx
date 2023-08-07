import Accordeon from "../components/Accordeon";
import {Business} from "../components/Business";
import {useTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";

export function Vocations() {
    const { t } = useTranslation();
    return (
        <div>
            <Business/>
            <Fade down>
                <div className="container vocation-text">
                    <span>{t("vocation.vocation-text")}</span>
                    <span><a href="mailto:hr@bbs.ge">hr@bbs.ge</a></span>
                    <span>{t("vocation.vocation-text2")}</span>
                </div>
            </Fade>
            <Accordeon/>
        </div>
    )
}