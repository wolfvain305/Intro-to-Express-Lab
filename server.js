const express = require('express')
const logger = require('morgan')


const app = express()

app.use(logger('dev'))

app.get('/greetings/:username', (req,res) => {
    const username = req.param.username;
    res.send(`Hello there, ${username}, It's a plessure to have you here!` )
})

app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    if (isNaN(number)) {
        return res.send('You must specify a number.')
    }
    const maxNumber = parseInt(number)
    const randomNumber = Math.floor(Math.random() * (maxNumber +1))
    res.send(`You rolled ${randomNumber}.`)
})

app.get('*', (req,res) => {
    res.status(404).send('This is not the page your looking for')
})

app.listen(3000, () => {
    console.log('I am listening')
})