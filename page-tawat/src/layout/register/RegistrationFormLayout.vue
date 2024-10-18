<template>
  <div class="form-container">
    <FormSection ref="formSection"></FormSection>
    <div class="button-container d-flex justify-content-center">
      <button class="btn btn-primary btn-lg" form="form-btn" @click="submitForm">تأكيد</button>
    </div>
  </div>
</template>

<script>
import FormItem from "../../components/FormItem.vue";
import FormSection from "../../components/FormSection.vue";
import api from "../../services/api";

export default {
  name: 'RegistrationFormLayout',
  components: { FormItem, FormSection },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async submitForm() {

      console.log("Submitting form...");
      const formData = this.$refs.formSection.formData;

      // Check if formData contains all fields
      const emptyFields = Object.keys(formData).filter(
        (key) => formData[key] === "" || formData[key] === null || formData[key] === undefined
      );

      // Debugging: Check for empty fields
      if (emptyFields.length > 0) {
        console.log("Empty fields:", emptyFields);
        return;
      }

      console.log("All fields are filled");
      await this.save(formData);
    },

    async save(formData) {

      // remove undefined values from formData
      // mybe it make problems with api
      const cleanedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== undefined)
      );

      try {
        console.log("Sending request:", cleanedFormData);
        await api.post("/register", cleanedFormData);
        this.$emit('next');
      } catch (error) {
        console.error("Error while submitting form:", error);
      }
    }
  }

};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  min-height: 60vh;
}

.button-container {
  margin-top: auto;
  padding: 1rem;
}
</style>
