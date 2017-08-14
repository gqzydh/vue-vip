<template>
  <div class="container">

 <h1 class="margin-bottom-15">登录</h1>
      <form role="form" method="post" @submit.prevent="sub()">
        <div class="form-group">
         
              <input type="text"  id="username" placeholder="用户名" v-model="user.name">
        </div>
        <div class="form-group">

              <input type="password"  id="password" placeholder="密码" v-model="user.password">
        </div>
        <div class="form-group">

            <input type="submit" value="登录" class="btn btn-info">
            <router-link to="/" class="btn btn-default">返回</router-link>
        </div>
      </form>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data (){
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    computed: {
    },
    methods:{
    }
  }

</script>
