const userCreatedSchema = require('./schemas/user/created.json')
const userDeletedSchema = require('./schemas/user/deleted.json')

module.exports = {
  user: {
    created: userCreatedSchema,
    deleted: userDeletedSchema
  }
}
