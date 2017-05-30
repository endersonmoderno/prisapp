'use strict';

describe('Controller: DinheiroCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var DinheiroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DinheiroCtrl = $controller('DinheiroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DinheiroCtrl.awesomeThings.length).toBe(3);
  });
});
