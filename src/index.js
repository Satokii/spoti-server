require('dotenv').config();

const app = require("./server.js")
const port = 4000

app.listen(port, () => {
    console.log(`[SERVER] Running on http://localhost:${port}/`)
})