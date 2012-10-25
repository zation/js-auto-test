describe('test', function() {
  it('aaa', function() {
    spyOn(jqueryApp, 'init');
    jqueryApp.init();
    expect(jqueryApp, 'init');
  });
});