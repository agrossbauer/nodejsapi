var expect = require('chai').expect
var isTDD = require('../main.js').isTdd;


describe('#index', function(){
	it('Test 1', function(){
	
	var s = 'just bdd here';
	expect(isTdd((s))).to.be.false;
	
	})
});