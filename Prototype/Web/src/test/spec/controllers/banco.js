'use strict';

describe('Controller: BancoCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var BancoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BancoCtrl = $controller('BancoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BancoCtrl.awesomeThings.length).toBe(3);
  });
});
