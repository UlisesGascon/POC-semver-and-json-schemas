const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const fixtures = require('../../__fixtures__')
const clientCreatedSchema = require('../../src/schemas/user/created.json')
const clientDeletedSchema = require('../../src/schemas/user/deleted.json')

const ajv = new Ajv()
addFormats(ajv)

describe('clientDeleted Schema', () => {
  it('Should keep the same schema', () => {
    expect(clientDeletedSchema).toMatchSnapshot()
  })

  it('Should recognize a valid payload', () => {
    const validate = ajv.compile(clientDeletedSchema.schema)
    const valid = validate(fixtures.user.deleted)
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })
})

describe('clientCreated Schema', () => {
  it('Should keep the same schema', () => {
    expect(clientCreatedSchema).toMatchSnapshot()
  })

  it('Should recognize a valid payload with all properties included', () => {
    const validate = ajv.compile(clientCreatedSchema.schema)
    const valid = validate(fixtures.user.created.allProperties)
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })

  it('Should recognize a valid payload with minimal properties included', () => {
    const validate = ajv.compile(clientCreatedSchema.schema)
    const valid = validate(fixtures.user.created.minimalProperties)
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })
})
