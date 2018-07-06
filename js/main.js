requirejs.config({
	basePath:'lib',
    paths: {
        'vue': "lib/vue",
        "ELEMENT": "lib/elementjs",
        "v": "lib/requirejs-vue",
        "VueRouter": "lib/vue-router",
		"axios":"lib/axios.min",
		"mock":"lib/axios-mock-adapter.min",
		'httputil':"lib/httputil"
    },
    shim: {
        'VueRouter': {
            exports: "VueRouter"
        }
    }
})

require(['vue', 'ELEMENT', 'VueRouter','v!component/home'],
    function (Vue, elementui, VueRouter,home) {
        Vue.use(elementui)
        Vue.use(VueRouter)
	   new Vue({
            router:new VueRouter(),
            el: '#root'  
			  
        })
		 
    })
