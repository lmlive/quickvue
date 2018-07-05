requirejs.config({
 paths:{
	 "ELEMENT":"elementjs",
	 "v":"requirejs-vue"
 }	
})

require(['Vue','v!component/test','ELEMENT',],function(Vue,test,elementui){
	Vue.use(elementui)
	new Vue({
		el:'#root',
		methods:{
			showMsg(){
				this.$message({type:'error',message:'running......'})
			}
		}
	});
	 
})