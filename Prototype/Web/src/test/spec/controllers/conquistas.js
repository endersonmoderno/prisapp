'use strict';

describe('Controller: ConquistasCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ConquistasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConquistasCtrl = $controller('ConquistasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConquistasCtrl.awesomeThings.length).toBe(3);
  });
});
