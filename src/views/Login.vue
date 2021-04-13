<template>
     <div class="login">
    <div class>
      <div class="col-md-6 offset-md-3">
        <h2 class="display-4 text-center mt-5">Login Form</h2>

        <form action="#">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="email" class="form-control" />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="form-control"
            />
             <div style="color:red;" v-if="error">{{ error }}</div>
          </div>
          

          <div class="form-group">
            <button type="submit" class="btn btn-info btn-block" @click.prevent="performLogin">Login</button>
          </div>
        </form>

        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"login",
    data()
    {
        return{
            email:"",
            password:"",
            error:"",
        }
    },
     methods:
    {
        performLogin()
        {
          axios.post('http://localhost:8000/api/user/login?api_password=2172000',{
            email: this.email,
            password:this.password,
          })

          .then( res=> { 
              console.log(res.data);
              
              localStorage.setItem('user', res.data.user);
              localStorage.setItem('api_token', res.data.user.api_token);

              this.$router.push("/profile");
            }
          )
          .catch(err => {
          this.isLoading = false;
          this.error = " There was error during login process";
          console.log(err.message);
        });
           // this.$router.push("/Login");
        }
        
    },

    
}
</script>
 