import logo from "../images/amazon.png"

const Header = () => {

    const dateToday = new Date().toString().slice(0, 10)
    return (
        <header>
            <div className = "text container">
                <h1>Amazon Deals</h1>
                <p>Date: {dateToday}</p>
            </div>
            
            <div className = "logo container">
                <img src = {logo} alt = "logo"></img>
            </div>
        </header>
    )
}

export default Header