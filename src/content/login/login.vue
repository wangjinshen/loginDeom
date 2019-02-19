<template>
    <div class="app pd40">
      <mt-field label="用户" placeholder="Input username" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="Input password" type="password" v-model="password"></mt-field>
    <div class="mt-20">
         <mt-button type="primary" size="large" @click="getUser">登陆</mt-button>
    </div>
     
    <div class="mt-20">
         <mt-button type="danger" size="large" @click="toRegister">注册</mt-button>
    </div>
     
    </div>
</template>
<script>


import Axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    getUser() {
      let { username, password } = this;
      Axios.get("/login", {
        params: {
          username,
          password
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            this.$cookie.set('token', res.data.Token, 1);
            this.$router.push("/Home");

          } else {
            
            alert("密码或者账号不正确");

          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toRegister() {
      this.$router.push("/Register");
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