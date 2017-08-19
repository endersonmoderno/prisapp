'use strict';

describe('Controller: CadastrarmailCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var CadastrarmailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastrarmailCtrl = $controller('CadastrarmailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastrarmailCtrl.awesomeThings.length).toBe(3);
  });
});
