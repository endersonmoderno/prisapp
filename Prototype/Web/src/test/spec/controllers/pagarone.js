'use strict';

describe('Controller: PagaroneCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var PagaroneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagaroneCtrl = $controller('PagaroneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PagaroneCtrl.awesomeThings.length).toBe(3);
  });
});
