<template>
  <div  class="account-setting">
    <div class="container">
      <h4 id="headColor">{{ settingTitle }}</h4>
      <p id="subTitle">Monday, July 22, 2019.</p>
    </div>
    <div class="container ">
        <div class="card shaodow-sm container">
            <div class="row container my-4">
        <img src="/images/personal_info.svg" class="mr-2" alt="personal icon" />
        <h5 class="mt-3">{{settingSubTitle}}</h5>
      </div>

      <div class=" mt-3">Use this page to update your contact information and change your password</div>
      <div>
       
      </div>

      <div>
        <form class="my-4">

         <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,id ) in errors" v-bind:key="id">{{ error }}</li>
          </ul>
        </p>

        <div class="row">
           <div class="col-md-1" v-if="personal.image"> <img class="rounded-circle imageReduce"   :src="`${personal.image}`" alt="user image"/></div>
             <div class="col-md-4 ml-2">
                <div class="form-material form-group">
                        <div class="fileinput fileinput-new input-group pt-4" data-provides="fileinput">
                            <div data-trigger="fileinput"> <i class="glyphicon glyphicon-file fileinput-exists"></i> 
                            <span  class="fileinput-filename d-none"></span></div> 
                            <span class="input-group-addon btn btn-default btn-file"> 
                              <!-- <span class="fileinput-new">Upload a new profile image</span> <span class="fileinput-exists">Change</span>
                               -->
                               <div data-v-443d3f70="" class="fileinput-new"><p class="styleUpload"><u>Upload a new profile image</u>
                                  </p><br><p data-v-443d3f70="" id="imageInfo">Maximum size allowed is 600kb of PNG, JPEG ,JPG.</p>
                                </div>
                            <input type="hidden">
                            <input @change="onFileChange" type="file" name="..."> </span> 
                            <a href="#" @click="removeImage" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
                        </div>
                </div>
             </div>
       </div>
       

          <div class="form-group">
            <label for="email">EMAIL ADDRESS</label>
            <input type="email" name="email" v-model="personal.email" class="form-control col-md-4" disabled id="email"  >
            
          </div>


          
          <div class="row">
            <div class="form-group col-md-4">
            <label for="fullname">FULL NAME</label>
            <input type="text" name="fullname" v-model=" personal.fullname" class="form-control" id="fullname" placeholder="Olatunji Joseph">
            
          </div>

        <div class="form-group col-md-4">
            <label for="username">USER NAME</label>
            <input type="text" class="form-control" name="username" v-model="personal.username" id="username" placeholder="Madjozi">
            
          </div>

          <div class="form-group col-md-4">
            <label for="birthDate">BIRTH DATE</label>
            <input type="date" class="form-control"  name="birthDate" v-model="personal.birthDate" id="birthDate">
            
          </div>

          
          </div>
          
         
          <button type="submit" @click.prevent="checkForm" class="buttonSubmit btn  my-4 btn btn-block col-md-3 ">Save Changes</button>
        </form>
        <hr class="my-4"/>


        <form >

            <div class="row">
                <div class="form-group col-md-4">
                  <label for="currentPassword">CURRENT PASSWORD</label>
                  <input type="password" class="form-control" name="currentPassword" v-model="checkPassword.currentPassword"  id="currentPassword" placeholder="Password">
                </div>
              <div class="form-group col-md-4">
                <label for="newPassword">NEW PASSWORD</label>
                <input type="password" class="form-control" name="newPassword" v-model="checkPassword.newPassword" id="newPassword" placeholder="Password">
              </div>
              <div class="form-group col-md-4">
                <label for="confirmPassword">CONFIRM PASSWORD</label>
                <input type="password" class="form-control" name="confirmPassword" v-model="checkPassword.confirmPassword" id="confirmPassword" placeholder="Password">
              </div>
            </div>
            <button type="submit" @click.prevent="checkFormPassword" class="buttonSubmit btn  my-4 btn btn-block col-md-3">Save Changes</button>
          
        </form>
      </div>
        </div>
    </div>


    <!-- change state of residence -->
    <div class="container">
      <div class="card shadow-sm my-5 container">
           <div class="row container my-4">
        <img src="/images/personal_info.svg" class="mr-2" alt="personal icon" />
        <h5 class="mt-3"> {{settingStateSubTitle}}</h5>
      </div>

      <div class=" my-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
      <div class="container">
        <form >

         <p v-if="errorsState.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,id ) in errorsState" v-bind:key="id">{{ error }}</li>
          </ul>
        </p>
          <div class="form-group">
            <label for="currentState">CURRENT STATE</label>
            <input type="text"  name="currentState" v-model="editUserState.currentState" 
            class="form-control col-md-4" disabled id="currentState"   placeholder="Niger">
            
          </div>
          <div class="row">
            <div class="form-group col-md-4">
            <label for="newState">NEW STATE OF RESIDENCE</label>
            <input type="text" name="newState" v-model="editUserState.newState"  
            class="form-control" id="newState" >
            
          </div>

        <div class="form-group col-md-4">
            <label for="liveIn">WHAT LGA DO YOU LIVE IN</label>
            <input type="text" name="liveIn" v-model="editUserState.liveIn"  class="form-control" id="liveIn">
            
          </div>

          <div class="form-group col-md-4">
            <label for="federalConstituence">FEDERAL CONSTITUENCIES</label>
            <input type="text" name="federalConstituence" v-model="editUserState.federalConstituence"   class="form-control"
             id="federalConstituence" >
          </div>
          
          </div>

          <div class="row">
            <div class="form-group col-md-4">
            <label for="senetorialConstituence">SENETORIAL DISTRICT</label>
            <input type="text" name="senetorialConstituence" v-model="editUserState.senetorialConstituence" 
             class="form-control" id="senetorialConstituence" >
            
          </div>

        <div class="form-group col-md-4">
            <label for="stateConstituence">STATE CONSTITUENCIES</label>
            <input type="text" name="stateConstituence" v-model="editUserState.stateConstituence"  
            class="form-control" id="stateConstituence" >
          </div>
          </div>

          <button type="submit" @click.prevent="formStateChange" 
            class="buttonSubmit btn  my-4 btn btn-block col-md-3">Save Changes</button>
        </form>
      </div>
     
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "app",
  components: {},
  data() {
    return {
      message: "Hello World!",
      settingTitle: "Account Settings".toUpperCase(),
      settingSubTitle: "Personal Information".toUpperCase(),
      settingStateSubTitle: "Change State of Residence".toUpperCase(),
      user: {
        id: 1,
        imgBackground: require("../../public/images/Avatar.png"),
        textInner: 6,
        totalAmountText: "Total Insurance Bought",
      },
       errors: [],
    // name: null,
    // age: null,
    // movie: null
    personal: {
      name: null,
      email: 'amarachukwu@gmail.com',
      fullname: null,
      username: null,
      birthDate: new Date(),
      image: require("../../public/images/Avatar.png")
    },
    checkPassword: {
      currentPassword:'howareyou2',
      newPassword: '',
      confirmPassword: ''
    },
     editUserState: {
       currentState: 'Niger',
      stateConstituence: "",
       senetorialConstituence: "",
        federalConstituence: "",
         liveIn: "",
          newState: ""
     },
     errorsState: []
    };
  },

 

  methods: {
    alertMessage() {
      alert(this.message);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.personal.image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.personal.image= e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.personal.image = '';
    }
  }
};
</script>

<style lang="css" scoped>
@import '../assets/css/file-upload.css'; 
#headColor {
  color: #240f00;
}

#imageInfo{
  color: #666666;
  font-family: Campton;
  font-size: 13px;
}

.imageReduce {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.editLink{
  color: #4C0032
}
.buttonSubmit{
  background: #F58634;
  color: #FFFFFF;
}


/* file input start */

.dispSample {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.fileinput .input-group-addon {
    border: none;
    border-top: none !important;
    border-bottom: none !important;
    background: #ffffff;
    margin-bottom: 0px !important;
    margin-top: 0px !important;
}

.styleUpload{
  margin-bottom: 0px;
    padding-left: -70px;
    position: absolute;
}
</style>
