const PORT = 8080 //line sets up a PORT with value '8080', which is port number server will run on 
const express = require('express')//imports Express.js framework, which is web app framework for node
//and simplifies process of building web applications
const cors = require('cors')//imports CORS(Cross-origin-resource sharing)middleware for Express. Enables 
//server to handle requests from different origins 
const app = express()//creates instance of Express application
//app is also used to define routes and handle HTTP requests
app.use(cors())//configures express to use CORS middleware

const username = "hetp0322"
const password = "Het2232005json#"
//previous 2 lines sets up username and password variables for authentication, used to authenticate requests for 
//external API 

app.get('/deals', async(req, res) => {//route for handling GET requests, server will fetch and process data 
    try {
        const body = {//defines data that will be sent in request to external API to fetch deals data
            "source": "amazon_search",
            "domain": "com",
            "query": "deals of the day",
            "parse": true,
            "pages": 1
        }
        //sends a request to Oxylabs API with defined data 
        const response = await fetch ("https://realtime.oxylabs.io/v1/queries", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "applications/json",
                "Authorization": "Basic " + Buffer.from(`${username}:${password}`).toString('base64'),
            }
        })

        const data = await response.json()//parses response from Oxylabs API as JSON

        const results = data.results[0].content.results.organic//extracts relevant results from API
    
        const Deals = results.filter(deal => deal.price_strikethrough)//filters out deals that have strikethrough price

        const bestDeal = Deals.sort((b, a) => //sorts deals based on  % 
            ((a.price_strikethrough - a.price) / a.price_strikethrough * 100) - 
            ((b.price_strikethrough - b.price) / b.price_strikethrough *100)
        )

        res.send(bestDeal) //sends sorted deals as response to client making request
        
    } catch(err) {
        console.error(err) 
    }
    
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))//starts server and makes it on port 8080, logs message to console 
//once server is started 

//node server getches deals from API when GET request is made, it then proccesses data and sends back best deal based on %
//used express for handling routes nd cors for allowing cross origin requests