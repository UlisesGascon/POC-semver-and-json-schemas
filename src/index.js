const userCreatedSchema = require('./schemas/user/created.json')
const deletedCreatedSchema = require('./schemas/user/deleted.json')

module.exports = {
  user: {
    created: userCreatedSchema,
    deleted: deletedCreatedSchema
  }
}
