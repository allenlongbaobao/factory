var assert = require('assert');
describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});
User = function(name){
	this.name = name;
	this.save;	
};
describe('User', function(){
	describe('#save()', function(){
		it('should save without error', function(done){
			var user = new User('luna');
			user.save(function(err){
				if(err) throw err;
				done();
			});
			
		});
	});
});
