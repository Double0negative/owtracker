const _ = require("lodash")
const MapService = require("./services/MapService")

let client = {}

_.assign(client, MapService)

module.exports = client


