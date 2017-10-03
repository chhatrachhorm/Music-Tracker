<template>
  <div class="register">
    <h1>Register new User</h1>
    <input type="email" name="email" v-model="email" placeholder="email@someone.com"/><br/>
    <input type="password" name="password" v-model="password"/><br/>
    <button @click="register" type="submit">SignUp</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    },
    watch: {
      email (value) {
        console.log(value)
      }
    },
    mounted () {
      setTimeout(() => {
        this.email = ''
      }, 1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
