const _ = require("lodash")

let client = {}

_.assign(client, require("./services/MapService"))
_.assign(client, require("./services/GameService"))

export default client


