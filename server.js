require('dotenv').config();
require('./config/database')
const PORT = process.env.PORT || 8000;
const app = require('./app-server')

app.listen(PORT, () => {
	console.log('We live Baby ' + PORT)
})
