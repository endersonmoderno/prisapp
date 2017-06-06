'use strict';

describe('Controller: ReceberoneCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ReceberoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceberoneCtrl = $controller('ReceberoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReceberoneCtrl.awesomeThings.length).toBe(3);
  });
});
