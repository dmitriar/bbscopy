import {useState} from "react";

export function Expertise() {
    const [accordeon, setAccordeon] = useState(false);

    function onAccordeonClick() {
        setAccordeon(!accordeon)
    }
    return (
        <section className="expertise">
            <div className="container container--expertise">
                <div onClick={onAccordeonClick} className="expertise-box">
                    <h4 className="expertise__text">( <i>Catalog</i> + <i>Services</i> ) x <i>Expertise</i> = <i>Solutions</i></h4>
                    <img src="./images/arrow.png" alt=""
                         className={`expertise__img ${accordeon ? 'rotate' : ''}`}/>
                </div>
                <p className={`expertise__footnote ${accordeon ? 'accordeon-open' : ''}`}>Какой то текст аккордиона</p>
            </div>
        </section>
    )
}