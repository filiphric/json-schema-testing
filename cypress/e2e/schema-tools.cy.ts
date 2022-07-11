import { ObjectSchema, assertSchema, combineSchemas, SchemaCollection, VersionedSchema, versionSchemas } from '@cypress/schema-tools'

it('test with cypress schema tools', () => {

  const boardSchema: ObjectSchema = {
     version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    example: {
      "created": "2022-07-10",
      "id": 1,
      "name": "new board",
      "starred": false,
      "user": 0
    },
    schema: {
      additionalProperties: false,
      title: 'Board',
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        user: {
          type: 'number'
        },
        starred: {
          type: 'boolean'
        },
        created: {
          type: 'string'
        },
        id: {
          type: 'number'
        }
      }
    },
  }
  const boardVersions: VersionedSchema = versionSchemas(boardSchema)
  const schemas: SchemaCollection = combineSchemas(boardVersions)

  cy.request({
    method: 'GET', 
    url: '/api/boards/1',
    headers: {
      accept: 'application/json'
    }
  })
  .then( board => {

    const result = assertSchema(schemas)('Board', '1.0.0')(board.body)
    expect(result).to.not.throw

  }) 

});
