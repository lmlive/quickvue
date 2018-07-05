  <template>
      <div>
          <el-button @click="aa">{{text}}</el-button>
					
      </div>
    
  </template>
    
    <script>
      define(["Vue",'ELEMENT'], function(Vue,ele) {
          Vue.component("test", {
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