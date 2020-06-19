const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://matt:matt123@cluster0-7w9rv.mongodb.net/buglogger?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				userCreateIndex: true,
				useUnifiedTopology: true,
			}
		)

		console.log('MongoDB Connected')
	} catch (error) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectDB
