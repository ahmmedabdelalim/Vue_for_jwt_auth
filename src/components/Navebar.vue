<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Vue Laravel API</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!api_token"  >
          <router-link class="btn btn-primary my-1 btn-block" to="/Login">Login</router-link>
        </li>
        <li class="nav-item" >
          <router-link
            class="btn btn-success my-1 ml-1 btn-block"
            to="/Register"
            tabindex="-1"
            aria-disabled="true"
            v-if="!api_token"
          >Register</router-link>
        </li>
        <li class="nav-item" v-if="api_token" >
          <button class="btn btn-warning "   @click.prevent="logout">Logout</button>
        </li>


        <li class="nav-item"  >
           
        </li>
      </ul>
    </div>
  </nav>
</template>


<script lang="ts">
 
// @ is an alias to /src
export default {
  name: "Navebar",
  data()
  {
    return{api_token:null};

  },

  mounted()//mtehod
  {
    this.checkUserStatus();
  },
  methods:
  {
    checkUserStatus()
    {
      if (localStorage.getItem("api_token") != null)
      {
        this.api_token = localStorage.getItem("api_token");
      }
    },
    //// method for logout
    logout(){
      localStorage.removeItem("api_token");
      localStorage.removeItem("user");
      this.api_token=null;
      this.$router.push("/login");
    }
    
  },
  
};
</script>