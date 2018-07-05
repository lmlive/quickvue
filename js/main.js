requirejs.config({
    paths: {
        'vue': "lib/vue",
        "ELEMENT": "lib/elementjs",
        "v": "lib/requirejs-vue",
        "VueRouter": "lib/vue-router"
    },
	shim:{
		'VueRouter':{ exports: "VueRouter"}
	}
})

require(['vue', 'ELEMENT', 'VueRouter', 'v!component/home','v!component/index'],
    function (Vue, elementui, VueRouter, home,index) {
        Vue.use(elementui)
        Vue.use(VueRouter)
//         const routes = [{
//                 path: '/',
//                 component: index
//             }]
//      const route=  new VueRouter(routes)

        // console.dir(route)

        new Vue({
            el: '#root',
			 mounted(){
				 console.log(this.$router)
			 }
        })

    })
