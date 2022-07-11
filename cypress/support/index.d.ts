declare namespace Chai {
  interface Assertion {
    /**
     * Custom Chai assertion that checks against schema
     *
     * @example
     ```
    expect(board.body).to.be.jsonSchema(boardSchema)
    ```
    * */
    jsonSchema(any): boolean
  }
}