'use strict';

describe('Controller: CartaonovoCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var CartaonovoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartaonovoCtrl = $controller('CartaonovoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartaonovoCtrl.awesomeThings.length).toBe(3);
  });
});
