describe('jquery app', function() {
  var jqueryAppBackup;

  beforeEach(function() {
    jasmine.Ajax.useMock();
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

  it('should cache elements', function() {
    spyOn(Handlebars, 'compile').andCallFake(function(arg) {
      return arg;
    });

    jqueryApp.cacheElements();

    expect(jqueryApp.todoTemplate).toEqual('todo-template');
    expect(jqueryApp.footerTemplate).toEqual('footer-template');
    expect(jqueryApp.$todoApp).toHaveId('todoapp');
    expect(jqueryApp.$newTodo).toHaveId('new-todo');
  });

  it('should bind events', function() {
    var orignalCreate = jqueryApp.create;
    jqueryApp.create = jasmine.createSpy();
    jqueryApp.bindEvents();
    jqueryApp.$newTodo.keyup();

    expect(jqueryApp.create).toHaveBeenCalled();

    jqueryApp.create = orignalCreate;
  });

  it('should create task', function() {
    var input = $('<input value="something" >'),
      e = {
        which: 'ENTER_KEY'
      },
      originalENTER_KEY = jqueryApp.ENTER_KEY,
      orignalTodos = jqueryApp.todos;
    jqueryApp.ENTER_KEY = 'ENTER_KEY';
    jqueryApp.todos = [];
    spyOn(jqueryApp.Utils, 'uuid').andReturn('uuid');
    spyOn(jqueryApp, 'render');

    jqueryApp.create.call(input, e);

    expect(jqueryApp.todos).toContain({
      id: 'uuid',
      title: 'something',
      completed: false
    });
    expect(input).toHaveValue('');
    expect(jqueryApp.render).toHaveBeenCalled();

    jqueryApp.ENTER_KEY = originalENTER_KEY;
    jqueryApp.todos = orignalTodos;
  });

  it('should create task and send to server', function() {
    var input = $('<input value="something" >'),
      e = {
        which: 'ENTER_KEY'
      },
      orignalTodos = jqueryApp.todos,
      originalENTER_KEY = jqueryApp.ENTER_KEY,
      response = {
          responseText: "success",
          contentType: "text/plain",
          status: 200
      },
      url = '/task';
    jqueryApp.todos = [];
    jqueryApp.ENTER_KEY = 'ENTER_KEY';
    spyOn(jqueryApp.Utils, 'uuid').andReturn('uuid');
    spyOn(jqueryApp, 'render');

    jqueryApp.create.call(input, e);
    var request = mostRecentAjaxRequest();
    request.response(response);

    expect(request.url).toEqual(url);
    expect(request.method).toEqual('POST');
    expect(request.params).toEqualData({
        id: 'uuid',
        title: 'something',
        completed: false
    });
  });
});