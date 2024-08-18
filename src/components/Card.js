//defines functional component Card, represents card that displays info about specific deal
const Card = ({ item }) => {
    //extracts first 12 characters from title, shortened version of title
    const titleShort = item.title.slice(0, 12);
    //calculates percent drop fin price from pricestrikethrough to price and converts it 
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
//card component represents ard displaying info about deal, includes deals image, title, price info, rating and %drop 
