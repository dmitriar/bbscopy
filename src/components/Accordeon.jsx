import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const Accordion = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="container accordion">
                <AccordionItem
                    vocationJob={t("vocation.vocation-job1")}
                    resp={t("vocation.resp")}
                    textResp={t("vocation.text-resp1")}
                    index={0}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    ask={t("vocation.ask")}
                    textAsk={t("vocation.text-ask1")}
                    conditions={t("vocation.conditions")}
                    textConditions={t("vocation.text-conditions1")}
                    who={t("vocation.who")}
                    textWho={t("vocation.text-who1")}
                    skills={t("vocation.skills")}
                    textSkills={t("vocation.text-skills1")}
                />

                <AccordionItem
                    vocationJob={t("vocation.vocation-job2")}
                    resp={t("vocation.resp")}
                    textResp={t("vocation.text-resp2")}
                    index={1}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    ask={t("vocation.ask")}
                    textAsk={t("vocation.text-ask2")}
                    conditions={t("vocation.conditions")}
                    textConditions={t("vocation.text-conditions2")}
                    who={t("vocation.who")}
                    textWho={t("vocation.text-who2")}
                    skills={t("vocation.skills")}
                    textSkills={t("vocation.text-skills2")}
                />
            </div>
        </div>
    );
};

const AccordionItem = ({ skills, textSkills, who, textWho, textConditions, conditions, textAsk, ask, vocationJob, resp, index, activeIndex, handleClick, textResp }) => {
    const isActive = activeIndex === index;

    return (
        <div>
            <div className={`accordion-item ${isActive ? 'active accordion-grey' : ''}`} onClick={isActive ? () => handleClick(null) : () => handleClick(index)}>
                <div className="accordion-title">{vocationJob}</div>
                <div className={`accordion-img`}>
                    <img className={`${isActive ? 'rotate' : ''}`} src="bbscopy/images/arrow.png" alt=""/>
                </div>
            </div>
            {isActive && <div className={`accordion-content`}>
                <p className="resp">{resp}</p>
                <p className="text-resp">{textResp}</p>

                <p className="resp">{ask}</p>
                <p className="text-resp">{textAsk}</p>

                <p className="resp">{conditions}</p>
                <p className="text-resp">{textConditions}</p>

                <p className="resp">{who}</p>
                <p className="text-resp">{textWho}</p>

                <p className="resp">{skills}</p>
                <p className="text-resp">{textSkills}</p>
            </div>}
        </div>
    );
};

export default Accordion;
