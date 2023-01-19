const userMetadata = {
  timestamp: 163533981300,
  schemaVersion: '1.0.0'
}

const id = '4586235c-9800-11ed-a8fc-0242ac120002'
const email = 'janedoe@demo.com'
const age = 33

module.exports = {
  user: {
    created: {
      minimalProperties: {
        id,
        email,
        ...userMetadata

      },
      allProperties: {
        id,
        email,
        age,
        ...userMetadata
      }
    },
    deleted: {
      id,
      ...userMetadata
    }
  }
}
