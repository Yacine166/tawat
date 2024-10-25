<template>
  <section class="vh-100 bg-image"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">welcome back</h2>
                <span v-if="errors.general" class="text-center text-muted mb-5 ">
                  <div class="alert alert-danger" role="alert">
                    {{ errors.general }}
                  </div>
                </span>
                <form>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg"
                      placeholder="Your email" v-model="fields.email.value" />
                    <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form3Example4cg">Password</label>
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg"
                      placeholder="Password" v-model="fields.password.value">
                    <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>

                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click="fetchData"
                      data-coreui-toggle="loading-button">
                      Login
                      <div v-if="loading" class="spinner-border mr-3  " style="height: 25px; width: 25px; "></div>
                    </button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">You don't have a account?
                    <a href="/signup" class="fw-bold text-body"><u>Sign up</u></a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import validateFields from "../functions/ValidateFields";
import store from '../functions/store';
import axios from "../services/api";


export default {
  data() {
    return {
      loading: false,
      errors: {},
      fields: {
        email: { value: "" },
        password: { value: "" },
      }
    }
  },
  mounted() {
    // check if user is authenticated and redirect to home page
    if (this.isAuthenticated) {
      this.$router.push('/home');
    }
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('authToken');
    }
  },
  methods: {
    async fetchData() {
      // validate field
      const { errors, isValid } = validateFields(this.fields);
      this.errors = errors;
      if (isValid) {
        // send data to server if no errors
        try {
          await this.sendData(this.fields);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async sendData(fields) {
      this.loading = true;
      const payload = {
        email: fields.email.value,
        password: fields.password.value,
      };
      // Simulate sending data to server
      try {
        const apiUrlRegister = `${import.meta.env.VITE_API_BASE_URL}/login`;
        const response = await axios.post(apiUrlRegister, payload);
        // wait 2 second
        this.loading = false;
        store.dispatch('login');
        await new Promise(resolve => setTimeout(resolve, 2000));
        // redirect to login page
        this.$router.push('/home');
      } catch (error) {
        this.loading = false;
        if (error.response) {
          // Handle 401 error for invalid credentials
          if (error.response.status === 401) {
            this.errors.general = "Invalid credentials. Please check your email and password.";
          } else if (error.response.status === 422) {
            // Handle validation errors if they exist
            const responseErrors = error.response.data.errors;
            this.errors = {
              email: responseErrors.email ? responseErrors.email[0] : "",
              password: responseErrors.password ? responseErrors.password[0] : "",
            };
          } else {
            console.log("An unexpected error occurred.");
          }
        }
      }
    }




  }
}
</script>
