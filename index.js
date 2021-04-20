const express = require('express')
const { getCandidates, getSingleCandidate } = require('./src/candidates')
const port = 3000

const app = express()

app.get('/candidates/:candidateId', getSingleCandidate)
app.get('/candidates', getCandidates)

app.listen(port, console.log('listening at http://localhost:' + port))
