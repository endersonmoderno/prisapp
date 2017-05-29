'use strict';

describe('Controller: CartoesCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var CartoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartoesCtrl = $controller('CartoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartoesCtrl.awesomeThings.length).toBe(3);
  });
});
