const _ = require("lodash")

let client = {}

_.assign(client, require("./services/MapService"))
_.assign(client, require("./services/GameService"))
_.assign(client, require("./services/AccountService"))

export default client


