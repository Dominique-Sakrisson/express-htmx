import Router from 'express'
import axios from 'axios'

export default Router()
.get('/cards', async (req, res,next) => {
    let coinInfo = []
    try {
        coinInfo = await axios.get('https://api2.binance.com/api/v3/ticker/price')
    } catch (error) {
        console.log(error);
    }
    const items = coinInfo.data.map(coin => {
        return `<li>${coin.symbol} --- ${coin.price}</li>`
    })
    const html = `<ul> Heres your data ${items}</ul>`
    res.send(html)
})



