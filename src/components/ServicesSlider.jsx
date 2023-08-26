import {useTranslation} from "react-i18next";
import {useState} from "react";

import Fade from 'react-reveal/Fade';
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function ServicesSlider() {
    const { t } = useTranslation();
    const [onClicked, setOnClicked] = useState(t("chemical.r1"));
    const [isVisibles, setIsVisibles] = useState(true);
    const [selectedTag, setSelectedTag] = useState('ServiceText1');

    function pushTextToDescription(e) {
        const selectedId = e.target.id;
        setIsVisibles(false); // Скрываем текущий текст

        switch (selectedId) {
            case 'ServiceText1':
                setTimeout(() => {
                    setOnClicked(t("chemical.r1"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText2':
                setTimeout(() => {
                    setOnClicked(t("chemical.r2"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText3':
                setTimeout(() => {
                    setOnClicked(t("chemical.r3"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText4':
                setTimeout(() => {
                    setOnClicked(t("chemical.r4"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText5':
                setTimeout(() => {
                    setOnClicked(t("chemical.r5"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText6':
                setTimeout(() => {
                    setOnClicked(t("chemical.r6"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText7':
                setTimeout(() => {
                    setOnClicked(t("chemical.r7"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText8':
                setTimeout(() => {
                    setOnClicked(t("chemical.r8"));
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
        }
        setSelectedTag(selectedId);
    }

    return (
        <div className="work">
            <div className="work-box desctop">
                <div className="container container--work">
                    <div className="work-titles work-titles--chemical">
                        <Fade down>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText1' ? 'selected' : ''}`} id="ServiceText1">{t("chemical.l1")}
                            </h2>
                        </Fade>
                        <Fade down delay={400}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText2' ? 'selected' : ''}`} id="ServiceText2">{t("chemical.l2")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText3' ? 'selected' : ''}`} id="ServiceText3">{t("chemical.l3")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText4' ? 'selected' : ''}`} id="ServiceText4">{t("chemical.l4")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText5' ? 'selected' : ''}`} id="ServiceText5">{t("chemical.l5")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText6' ? 'selected' : ''}`} id="ServiceText6">{t("chemical.l6")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText7' ? 'selected' : ''}`} id="ServiceText7">{t("chemical.l7")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText8' ? 'selected' : ''}`} id="ServiceText8">{t("chemical.l8")}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText9' ? 'selected' : ''}`} id="ServiceText9">{t("chemical.l9")}
                            </h2>
                        </Fade>
                    </div>
                    <div className="work-descriptions">
                        <p className={`work-descriptions__text ${isVisibles ? 'visible' : ''}`} data-description="ServiceText1">{onClicked}</p>
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
                                <h2 className="work-titles__text">{t("chemical.l1")}
                                </h2>
                                <p className="work-descriptions__text">{t("chemical.r1")}</p>
                            </div>
                        </Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l2")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r2")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l3")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r3")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l4")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r4")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l5")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r5")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l6")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r6")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l7")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r7")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l8")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r8")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{t("chemical.l9")}
                            </h2>
                            <p className="work-descriptions__text">{t("chemical.r9")}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}