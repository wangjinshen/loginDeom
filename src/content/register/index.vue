<template>
    <div class="app pd40">
      <mt-field label="用户" placeholder="Input username" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="Input password" type="password" v-model="password"></mt-field>
     
    <div class="mt-20">
         <mt-button type="danger" size="large" @click="setUser">注册</mt-button>
    </div>
     
    </div>
</template>
<script>
import Axios from "axios"
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods:{
      setUser(){
          let {username,password}=this
          Axios.get("/register",{
              params:{
                  username,
                  password
              }
          }).then(res=>{
            if(res.data.code===0){
                alert("用户名已被使用")
            }else if(res.data.code===1){
                 alert("注册成功")
                  this.$router.push("/login");
            }
          }).catch(err=>{
              console.log(err)
          })
          console.log(456789)
      }
  }
};
</script>
<style scoped lang="css">
.pd40 {
  padding: 40px 20px 0 20px;
}
.mt-20 {
  margin-top: 20px;
}

</style>