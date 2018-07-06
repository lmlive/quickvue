  <template>
          <el-button @click="aa">{{text}}</el-button>
  </template>
    
    <script>
      define(["vue",'ELEMENT'], function(Vue,ele) {
          return Vue.component("test", {
              template: template, // the variable template will be injected 
              data: function() {
                  return {"text": "Ok"};
              },
							methods: {
								aa() {
									let txt=this.text
									this.$message({message:txt,type:'error'})
								}
							},
          });
        });
    </script>