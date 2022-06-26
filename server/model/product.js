const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HeadingSchema = new Schema({
    image: String,
    title: String,
    description: String,
})

const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: Number,
    description: String,
    coverImage: String,
    headings: [HeadingSchema],
});

module.exports = mongoose.model('Product', ProductSchema)