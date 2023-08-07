import Fade from 'react-reveal/Fade';
import Pulse from "react-reveal";
import {Link} from "react-router-dom";
export function CategoriesItem( {image, title, btn, descriptions, id, link} ) {
    return (
        <div className="categories-item">
            <Fade left >
                <div className="categories-item__image">
                    <img src={image} alt={title}/>
                </div>
            </Fade>
            <Pulse >
                <div className="categories-item__info">
                    <h3 className="categories-item__title">{title}</h3>
                    <div className="categories-item__box"  id={id}>
                        <p className="categories-item__descriptions">{descriptions}</p>
                        <Link to={link}>
                            <button className="categories-item__btn">{btn}</button>
                        </Link>
                    </div>
                </div>
            </Pulse>
        </div>
    )
}