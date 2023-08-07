
export function ServicesItem( {src, description} ) {
    return (
        <div className="services-item">
            <div className="services-item__img">
                <img src={src} alt=""/>
            </div>
            <div className="services-item__description">{description}</div>
        </div>
    )
}