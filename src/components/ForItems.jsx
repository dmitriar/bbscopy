
export function ForItems( {description, img} ) {
    return (
        <div className="for-items__item">
            <p className="for-items__item-description">{description}</p>
            <div className="for-items__item-image">
                <img src={img} alt={img}/>
            </div>
        </div>
    )
}