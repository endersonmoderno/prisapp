'use strict';

describe('Controller: ReceberCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ReceberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceberCtrl = $controller('ReceberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReceberCtrl.awesomeThings.length).toBe(3);
  });
});
