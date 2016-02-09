'use strict';

describe('Controller: PictureEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PictureEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PictureEditCtrl = $controller('PictureEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PictureEditCtrl.awesomeThings.length).toBe(3);
  });
});
