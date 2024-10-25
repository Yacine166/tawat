<template>
  <section class="vh-100 bg-image"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5 ">Create an account</h2>
                <span class="text-center text-muted mb-5 ">
                  <div v-if="secusses" class="alert alert-success" role="alert">
                    Sueccefully registered.
                  </div>
                </span>
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="form3Example1cg">Your Name</label>
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Your name"
                      v-model="fields.name.value" />
                    <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="form3Example3cg">Your Email</label>
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg"
                      placeholder="Your email" v-model="fields.email.value" />
                    <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="form3Example4cg">Password</label>
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg"
                      placeholder="Password" v-model="fields.password.value">
                    <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                  </div>

                  <div class="form-outline mb-5 ">
                    <label class="form-label fw-bold" for="form3Example4cdg">Repeat your password</label>
                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg"
                      placeholder="Repeat Your Password" v-model="fields.password2.value" />
                    <span v-if="errors.password2" class="text-danger">{{ errors.password2 }}</span>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      @click="fetchData">Register
                      <div v-if="secusses" class="spinner-border mr-3" style="height: 25px; width: 25px; "></div>
                    </button>


                  </div>

                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                      class="fw-bold text-body"><u>Login here</u></a></p>
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
import axios from "../services/api";


export default {
  data() {
    return {
      secusses: false,
      errors: {},
      fields: {
        name: { value: "" },
        email: { value: "" },
        password: { value: "" },
        password2: { value: "" },
      }
    }
  },
  methods: {

    async fetchData() {
      // validate fields
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
      const payload = {
        name: fields.name.value,
        email: fields.email.value,
        password: fields.password.value,
      };
      // Simulate sending data to server
      try {
        const apiUrlRegister = `${import.meta.env.VITE_API_BASE_URL}/sign-up`;
        const response = await axios.post(apiUrlRegister, payload);
        // redirect to login page
        // wait 2 second
        this.secusses = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        // redirect to login page
        this.$router.push('/login');
      } catch (error) {
        if (error.response && error.response.status === 422) {
          // Display validation errors in the field
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
};
</script>
