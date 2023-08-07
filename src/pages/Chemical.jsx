import {Services} from "../components/Services";
import {Advantage} from "../components/Advantage";
import {Sertification} from "../components/Sertification";
import {useEffect, useState} from "react";

export function Chemical() {
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
            {showContent ? (
                <div>
                    <section className="container chemical">
                        <div className="chemical__main">
                            <img src="./images/animate.png" alt="main chemical"/>
                        </div>
                        <Services/>
                        <Advantage/>
                        <Sertification/>
                    </section>
                </div>
            ): <div className="loader">loading</div>}
        </div>


    )
}