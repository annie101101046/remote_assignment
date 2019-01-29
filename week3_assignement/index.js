//assignment1&2&3

const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello, My Server!'))
app.get('/getData', (req, res) => {
	let number = req.query.number
	if (number === undefined) {
		return res.send('Lack of Parameter')
	}
	number = parseInt(number, 10)
	if (Number.isNaN(number)) {
		return res.send('Wrong Parameter')
	}
	let result = (1 + number) * number / 2
	res.send(result.toString())
})
app.get('/sum.html', (req, res) => res.sendFile(path.join(__dirname, 'sum.html')))

app.listen(port, () => console.log(`app listening on port ${port}!`))
