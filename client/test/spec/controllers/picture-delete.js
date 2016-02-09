'use strict';

describe('Controller: PictureDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PictureDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PictureDeleteCtrl = $controller('PictureDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PictureDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
