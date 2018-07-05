requirejs.config({
 paths:{
	 'vue':"lib/vue",
	 "ELEMENT":"lib/elementjs",
	 "v":"lib/requirejs-vue",
 }	
})

require(['vue','ELEMENT','v!component/test'],function(Vue,elementui){
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