import {useTranslation} from "react-i18next";
import {useState} from "react";

import Fade from 'react-reveal/Fade';
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function HowWork() {
    const { t } = useTranslation();
    const [onClicked, setOnClicked] = useState(t("work.r1"));
    const [isVisible, setIsVisible] = useState(true);
    const [selectedTag, setSelectedTag] = useState('titleText1');

    function pushTextToDescription(e) {
        const selectedId = e.target.id;
        setIsVisible(false); // Скрываем текущий текст

        switch (selectedId) {
            case 'titleText1':
                setTimeout(() => {
                    setOnClicked(t("work.r1"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
            case 'titleText2':
                setTimeout(() => {
                    setOnClicked(t("work.r2"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
            case 'titleText3':
                setTimeout(() => {
                    setOnClicked(t("work.r3"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
            case 'titleText4':
                setTimeout(() => {
                    setOnClicked(t("work.r4"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
            case 'titleText5':
                setTimeout(() => {
                    setOnClicked(t("work.r5"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
            case 'titleText6':
                setTimeout(() => {
                    setOnClicked(t("work.r6"));
                    setIsVisible(true); // Показываем новый текст
                }, 200);
                break;
        }
        setSelectedTag(selectedId);
    }

    return (
        <section className="work">
            <Fade down duration={500} delay={500}>
                <h1 className="work__title">{t("work.title")}</h1>
            </Fade>

            <div className="work-box desctop">
                <div className="container container--work">
                    <div className="work-titles">
                        <Fade down>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText1' ? 'selected' : ''}`} id="titleText1">{t("work.l1")}
                            </h2>
                        </Fade>
                        <Fade down delay={400}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText2' ? 'selected' : ''}`} id="titleText2">{t("work.l2")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText3' ? 'selected' : ''}`} id="titleText3">{t("work.l3")}
                            </h2>
                        </Fade>
                        <Fade down delay={1200}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText4' ? 'selected' : ''}`} id="titleText4">{t("work.l4")}
                            </h2>
                        </Fade>
                        <Fade down delay={1200}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText5' ? 'selected' : ''}`} id="titleText5">{t("work.l5")}
                            </h2>
                        </Fade>
                        <Fade down delay={1200}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'titleText6' ? 'selected' : ''}`} id="titleText6">{t("work.l6")}
                            </h2>
                        </Fade>
                    </div>
                    <div className="work-descriptions">
                        <p className={`work-descriptions__text ${isVisible ? 'visible' : ''}`} data-description="titleText1">{onClicked}</p>
                    </div>
                </div>

            </div>
            <div className="work-mobile">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    slidesPerView="auto"
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                >
                    <SwiperSlide>
                        <Fade left>
                            <div className="slideContainer">
                                <h2 className="work-titles__text">{t("work.l1")}
                                </h2>
                                <p className="work-descriptions__text">{t("work.r1")}</p>
                            </div>
                        </Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("work.l2")}
                            </h2>
                            <p className="work-descriptions__text">{t("work.r2")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("work.l3")}
                            </h2>
                            <p className="work-descriptions__text">{t("work.r3")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("work.l4")}
                            </h2>
                            <p className="work-descriptions__text">{t("work.r4")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("work.l5")}
                            </h2>
                            <p className="work-descriptions__text">{t("work.r5")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("work.l6")}
                            </h2>
                            <p className="work-descriptions__text">{t("work.r6")}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}