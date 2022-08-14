const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/sound/:name', (req,res) => {
    const { name } = req.params

    if(name == "dog"){
        res.send({'sound' : '멍멍'})
    } else if(name == "cat"){
        res.send({'sound' : '야옹'})
    }else if(name == "pig"){
        res.send({'sound' : '꿀꿀'})
    }else{
        res.send({'sound' : '알 수 없습니다.'})
    }

})

app.listen(port, () => {
    console.log('보냄')
})