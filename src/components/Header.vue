<template>
  <div class="container">
    <div v-bind:class="active" v-on:click.prevent>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img src="/images/Logo.svg" class="img-fluid" alt="logo image" />
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent" style>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link dashboard"
                :style="[this.active=== 'dashboard'? {'color': '#240F00 !important'} :  {'color': '#737373'}]"
                @click.native="makeActive('dashboard')"
              >Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/buy-insurance"
                class="nav-link buyInsurance"
                :style="[this.active=== 'buyInsurance'? {'color': '#240F00 !important'} :  {'color': '#737373'}]"
                @click.native="makeActive('buyInsurance')"
              >Buy insurance</router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/account-setting"
                class="nav-link accountSetting"
                :style="[this.active=== 'accountSetting'? {'color': '#240F00 !important'} :  {'color': '#737373'}]"
                @click.native="makeActive('accountSetting')"
              >Account Settings</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li id="imageContainer" class="nav-item">
              <p class="mt-2 ml-2">LD</p>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropCheck"
                href="#"
                :style="[this.active=== 'dropCheck'? {'color': '#240F00 !important'} :  {'color': '#737373'}]"
                v-on:click="makeActive('dropCheck')"
                id="nameDrop"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Lois Durello</a>
              <div class="dropdown-menu" aria-labelledby="nameDrop">
                <a class="subDropdown dropdown-item" href="#">Make a claim</a>
                <div class="dropdown-divider"></div>
                <a class="subDropdown dropdown-item" href="#">View Policy</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    // msg: String
  },
  data() {
    return { active: "dashboard" };
  },
  methods: {
    makeActive: function(item) {
      // When a model is changed, the view will be automatically updated.
      this.active = item;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nameDrop {
  font-family: Avenir Next;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #240f00;
}

#imageContainer {
  width: 40px;
  height: 40px;
  background-image: url("/images/profile pic.svg");
}

.bg-light {
  background-color: #ffffff !important;
}

.navbar-light .navbar-nav .nav-link {
  font-family: Avenir Next;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #737373 !important;
}

.subDropdown {
  font-family: Avenir Next;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #4d0032;
}
</style>
