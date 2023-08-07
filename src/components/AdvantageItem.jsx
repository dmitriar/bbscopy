
export function AdvantageItem( {src, title, description} ) {
    return (
        <div className="advantage-item">
            <div className="advantage-item__title">
                <img src={src} alt={title}/>
                <p className="advantage-item__title-text">{title}</p>
            </div>
            <div className="advantage-item__description">
                <p className="advantage-item__description-text">{description}</p>
            </div>
        </div>
    )
}