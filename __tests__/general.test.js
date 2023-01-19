const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const semver = require('semver')
const jsonSchemasLibrary = require('../src/index')

const ajv = new Ajv()
addFormats(ajv)

const schemas = Object.keys(jsonSchemasLibrary.user).map(key => {
  return [jsonSchemasLibrary.user[key].name, jsonSchemasLibrary.user[key]]
})

describe('All Schema files validation', () => {
  test.each(schemas)(
    'Should %s contain the VALID schema',
    (name, schema) => {
      expect(() => ajv.compile(schema.schema)).not.toThrow()
    }
  )

  test.each(schemas)(
    'Should %s contain a VALID version semver compatible',
    (name, schema) => {
      const version = semver.valid(schema.version)
      expect(version).not.toEqual(null)
    }
  )

  test.each(schemas)(
    'Should %s contain a VALID semver schema Compatibility',
    (name, schema) => {
      // At least 3 characters (1.x)
      expect(schema.schemaCompatibility.length >= 3).toEqual(true)
    }
  )

  test.each(schemas)(
    'Should %s contain a VALID name',
    (name, schema) => {
      // At least 5 characters
      expect(schema.name.length >= 5).toEqual(true)
    }
  )
})

describe('All Schema files validation', () => {
  it('Should export a valid library to be consumed by other projects', () => {
    expect(jsonSchemasLibrary).toMatchSnapshot()
  })
})
