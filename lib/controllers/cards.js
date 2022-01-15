import Router from 'express'
import axios from 'axios'

export default Router()
.get('/cards', async (req, res,next) => {
    let mtgCardsLib = []
    try {
        mtgCardsLib = await axios.get('https://api.magicthegathering.io/v1/cards?contains=imageUrl')
    } catch (error) {
        console.log(error);
    }
    const items = mtgCardsLib.data.cards.map(card => {
        return `<li><img src='${card.imageUrl}' /></li>`
    })
    const html = `<ul>${items}</ul>`
    res.send(html)
})
