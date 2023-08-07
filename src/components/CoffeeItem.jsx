import Fade from "react-reveal/Fade";
import Pulse from "react-reveal";

export function CoffeeItem( {title, src, description} ) {
    return (
        <div className="coffee-items__item">
            <Fade left>
                <div className="coffee-items__img">
                    <img src={src} alt={src}/>
                </div>
            </Fade>
            <Pulse>
                <div className="coffee-items__info">
                    <p className="work-item__info-title">{title}</p>
                    <p className="work-item__info-descriptions">{description}</p>
                </div>
            </Pulse>
        </div>
    )
}