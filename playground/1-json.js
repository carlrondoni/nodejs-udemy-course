const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Carl'
data.age = 37
const dataStringJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataStringJSON)