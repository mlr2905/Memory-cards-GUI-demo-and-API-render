
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(path.join('.', '/static/')))
app.listen(3000, () => {
    console.log('Express server is running ....');
}); 

