'use strict';

describe('Controller: Investimento2Ctrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var Investimento2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Investimento2Ctrl = $controller('Investimento2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Investimento2Ctrl.awesomeThings.length).toBe(3);
  });
});
