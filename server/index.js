const express = require('express')
const mongoose = require('mongoose')
const FakeDB = require('./fake-db')

const productRoutes = require('./routes/products')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test')

    const fakeDb = new FakeDB()
    fakeDb.initDb()
}

const app = express()

app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('I am running')
})