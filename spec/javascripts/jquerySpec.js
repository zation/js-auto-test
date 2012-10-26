describe('jquery app', function() {
  beforeEach(function() {
    var fixtures = '<div id="todo-template">todo-template</div>' +
      '<div id="footer-template">footer-template</div>' +
      '<div id="todoapp">' +
      ' <div id="footer"></div>' +
      '</div>' +
      '<div id="new-todo"></div>' +
      '<div id="toggle-all"></div>' +
      '<div id="main"></div>' +
      '<div id="todo-list"></div>' +
      '<div id="todo-count"></div>' +
      '<div id="clear-completed"></div>';
    setFixtures(fixtures);
  });
});