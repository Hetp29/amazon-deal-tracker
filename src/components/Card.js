const Card = ({ item }) => {
    const titleShort = item.title.slice(0, 12);
    const percentDrop = ((item.price_strikethrough - item.price) / item.price_strikethrough * 100).toFixed(0);

    return (
        <div className="card">
            <div className="img-container">
                <img src={item.url_image} alt={item.title}/>
            </div>

            <div className="text-container">
                <h5>{titleShort}...</h5>
                <p>Price drop from {item.price_strikethrough} to {item.price}</p>
                <p>Rating: {item.rating}</p>
            </div>

            <div className="info-container">
                <div className="circle">{percentDrop}%</div>
                <a href={`https://www.amazon.com/${item.url}`}>Go!</a>
            </div>
        </div>
    );
}

export default Card;
