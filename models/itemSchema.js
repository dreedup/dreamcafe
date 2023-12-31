const item = require('./item')
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    desc: { type: String, required: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 }
  }, {
    timestamps: true
  })

module.exports = itemSchema  