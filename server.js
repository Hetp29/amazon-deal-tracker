const PORT = 8080
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const username = "hetp0322"
const password = "Het2232005json#"

app.get('/deals', async(req, res) => {
    try {
        const body = {
            "source": "amazon_search",
            "domain": "com",
            "query": "deals of the day",
            "parse": true,
            "pages": 1
        }
        const response = await fetch ("https://realtime.oxylabs.io/v1/queries", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "applications/json",
                "Authorization": "Basic " + Buffer.from(`${username}:${password}`).toString('base64'),
            }
        })

        const data = await response.json()

        const results = data.results[0].content.results.organic
    
        const Deals = results.filter(deal => deal.price_strikethrough)

        const bestDeal = Deals.sort((b, a) =>
            ((a.price_strikethrough - a.price) / a.price_strikethrough * 100) - 
            ((b.price_strikethrough - b.price) / b.price_strikethrough *100)
        )

        res.send(bestDeal)
        
    } catch(err) {
        console.error(err) 
    }
    
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))