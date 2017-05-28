'use strict';

describe('Controller: ContatosCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ContatosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContatosCtrl = $controller('ContatosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContatosCtrl.awesomeThings.length).toBe(3);
  });
});
