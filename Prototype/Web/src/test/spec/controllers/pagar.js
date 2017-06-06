'use strict';

describe('Controller: PagarCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var PagarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagarCtrl = $controller('PagarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PagarCtrl.awesomeThings.length).toBe(3);
  });
});
