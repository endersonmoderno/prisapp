'use strict';

describe('Controller: ContatofbCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ContatofbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContatofbCtrl = $controller('ContatofbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContatofbCtrl.awesomeThings.length).toBe(3);
  });
});
