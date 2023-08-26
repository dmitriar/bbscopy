
export function ForItems( {description, img, link} ) {
    return (
        <div className="for-items__item">
            <p className="for-items__item-description">{description}</p>
            <div className="for-items__item-image">
                <a href={link} target="_blank">
                    <img src={img} alt={img}/>
                </a>
            </div>
        </div>
    )
}