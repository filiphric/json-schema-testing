it('test with chai', () => {

  const boardSchema = {
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

  cy.request({
    method: 'GET', 
    url: '/api/boards/1',
    headers: {
      accept: 'application/json'
    }
  })
  .should('jsonSchema', boardSchema)

  cy.request({
    method: 'GET', 
    url: '/api/boards/1',
    headers: {
      accept: 'application/json'
    }
  })
  .then( board => {

    expect(board).to.be.jsonSchema(boardSchema);

  }) 
  
});