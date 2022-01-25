const cypress = require("cypress");

describe(`TODO api testing`, () => {
  let todoItem;
  it("fetches Todo items - GET req", () => {
    cypress.request("/todos").as("todoRequest");
    cypress.get("@todoRequest").then((todos) => {
      expect(todos.status).to.eq(200);
      assert.isArray(todos.body, "Todos Response is an array");
    });
  });
});
