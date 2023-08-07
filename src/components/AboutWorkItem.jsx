import Fade from "react-reveal/Fade";

export function AboutWorkItem( {title, description, img} ) {
    return (
        <div className="work-item">
            <div className="container container--work-item">
                <Fade left>
                    <div className="work-item__info">
                        <p className="work-item__info-title">{title}</p>
                        <p className="work-item__info-descriptions">{description}</p>
                    </div>
                </Fade>
                <Fade down>
                    <div className="work-item__image">
                        <img src={img} alt={img} className="work-item__image-picture"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}