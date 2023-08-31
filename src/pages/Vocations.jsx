import Accordeon from "../components/Accordeon";
import {Business} from "../components/Business";
import {useTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";
import {useEffect, useState} from "react";

export function Vocations() {
    const { t } = useTranslation();
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
    return (
        <>
            {showContent ? (<div>
                <Business/>
                <Fade down>
                    <div className="container vocation-text">
                        <span>{t("vocation.vocation-text")}</span>
                        <span><a href="mailto:hr@bbs.ge">hr@bbs.ge</a></span>
                        <span>{t("vocation.vocation-text2")}</span>
                    </div>
                </Fade>
                <Accordeon/>
            </div>) : <div className="loader">loading</div>}
        </>
    )
}