'use strict';

describe('myApp.view2 module', function() {

	beforeEach(
		module('myApp.view2'), module('underscore')
	);

  beforeEach(inject(function(_) {
  	console.log(_);
  }));

  describe('view2 controller', function(){

    it('should ....', inject(function() {
      //spec body
      // var view2Ctrl = $controller('View2Ctrl');
      var foo = {};
      //console.log(module('underscore'));
      expect(foo).toBeDefined();
    }));

  });
});