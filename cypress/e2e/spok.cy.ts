import spok from 'cy-spok'

it('uses spok', () => {

  cy.request({
    method: 'GET', 
    url: '/api/boards/1',
    headers: {
      accept: 'application/json'
    }
  }).should(spok({
    status: 200,
    body: {
      id: spok.type('number'),
      starred: false
    }
  }))
  
});