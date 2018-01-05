var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../main');
var should = chai.should();

chai.use(chaiHttp);

describe('Basic test', function(){
	it('Test 1', function(done){
	chai.request(server)
		.get('/api')
		.end(function(err,res){
			res.should.have.status(200);
			done();
			});	
	});
});