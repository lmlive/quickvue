define(function(require){
	var B=require('test/b');
	var A=require('test/a');
	return {name:A.name+'and '+B.name}
})