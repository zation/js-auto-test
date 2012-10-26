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

  it('should initialize app', function() {
    spyOn(jqueryApp.Utils, 'store').andReturn('some thing');
    spyOn(jqueryApp, 'cacheElements');
    spyOn(jqueryApp, 'bindEvents');
    spyOn(jqueryApp, 'render');

    jqueryApp.init();

    expect(jqueryApp.ENTER_KEY).toEqual(13);
    expect(jqueryApp.Utils.store).toHaveBeenCalledWith('todos-jquery');
    expect(jqueryApp.todos).toEqual('some thing');
    expect(jqueryApp.cacheElements).toHaveBeenCalled();
    expect(jqueryApp.bindEvents).toHaveBeenCalled();
    expect(jqueryApp.render).toHaveBeenCalled();
  });
});