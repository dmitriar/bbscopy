import Fade from "react-reveal/Fade";

export function AspectsItem( {title,img,description, delay} ) {
    return (
        <Fade left delay={delay}>
            <div className="aspects-item">
                <div className="aspects-item__image">
                    <img src={img} alt={img}/>
                </div>
                <h4 className="aspects-item__title">{title}</h4>
                <p className="aspects-item__description">{description}</p>
            </div>
        </Fade>
    )
}