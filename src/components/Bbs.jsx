import {useTranslation} from "react-i18next";
import Bounce from 'react-reveal/Bounce';
import Pulse from "react-reveal";
export function Bbs() {
    const { t } = useTranslation();
    return (
        <section className="container bbs">
            <div className="bbs-info">
                <div className="bbs-info__left">
                    <Bounce left>
                        <span className="bbs-info__left-text">B</span>
                    </Bounce>
                    <Bounce left delay={500}>
                        <span className="bbs-info__left-text">B</span>
                    </Bounce>
                    <Bounce left delay={1000}>
                        <span className="bbs-info__left-text">S</span>
                    </Bounce>
                </div>
                <div className="bbs-info__right">
                    <Bounce right delay={1500}>
                        <p className="bbs-info__right-top">HoReCa</p>
                    </Bounce>
                    <Bounce right delay={2000}>
                        <p className="bbs-info__right-bottom">{t("bbs.info")}</p>
                    </Bounce>
                </div>
            </div>
        </section>
    )
}