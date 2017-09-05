'use strict';

describe('Controller: DuvidasCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var DuvidasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DuvidasCtrl = $controller('DuvidasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DuvidasCtrl.awesomeThings.length).toBe(3);
  });
});
