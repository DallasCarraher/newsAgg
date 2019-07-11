const express = require('express')
const morgan = require('morgan')
const rssParser = require('rss-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001;

app.use(morgan('short'))
app.use(cors())

const parser = new rssParser({
    xml2js: {
        // emptyTag: '--EMPTY--'
    }
})

app.get("/get/rss", async (req, res) => {
    let ycomHacker = await parser.parseURL('https://hnrss.org/frontpage')
    console.log(ycomHacker.title)
    let hackerNoon = await parser.parseURL('https://medium.com/feed/@hackernoon')
    console.log(hackerNoon.title)

    const feed = [ycomHacker, hackerNoon]

    // const response = feed.items.map(function(item) {
    //     return item.title + item.content
    // })

    // console.log(response)
    console.log(feed)
    res.send(feed)
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Root")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})