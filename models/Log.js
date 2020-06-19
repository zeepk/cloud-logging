const mongoose = require('mongoose')

//like a Django model
const LogSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, 'Log text is required'],
	},
	priority: {
		type: String,
		default: 'low',
		enum: ['low', 'moderate', 'high'],
	},
	user: {
		type: String,
		trim: true,
		required: [true, 'User is required'],
	},
	created: {
		type: Date,
		trim: true,
		default: Date.now,
	},
})

module.exports = mongoose.model('Log', LogSchema)
