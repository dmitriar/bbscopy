import {Animate} from "../components/Animate";
import {HowWork} from "../components/HowWork";
import {Expertise} from "../components/Expertise";
import {Categories} from "../components/Categories";
import {Services} from "../components/Services";
import {Advantage} from "../components/Advantage";
import {Sertification} from "../components/Sertification";
import {Business} from "../components/Business";
import {Bbs} from "../components/Bbs";
import {useEffect, useState} from "react";

export function Home() {
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
        <div>
            {showContent ? (<>
                <Animate/>
                {/*<Expertise/>*/}
                {/*<Bbs/>*/}
                {/*<HowWork/>*/}
                <Categories/>
                {/*<Services/>*/}
                {/*<Advantage/>*/}
                {/*<Sertification/>*/}
            </>) : <div className="loader">loading</div>}
        </div>
    )
}