//imports image file and assigns it to logo 
import logo from "../images/amazon.png"
//defines function component Header for header section of app
const Header = () => {
    //creates new Date object to get current date and converts it to string
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
//exports Header as default export 
//header component consists of text container displaying amazon deals and logo and todays date
