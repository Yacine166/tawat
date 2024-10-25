<template>
  <div class="form-container">
    <FormSection ref="formSection"></FormSection>
    <div class="button-container d-flex justify-content-center">
      <button v-if="!loading" class="btn btn-primary btn-lg" @click="submitForm" >تأكيد</button>
      <div v-else class="spinner-border" role="status"></div>
    </div>

  </div>
</template>

<script>
import FormItem from "../../components/FormItem.vue";
import FormSection from "../../components/FormSection.vue";
import axios from "../../services/api";
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
      if (this.loading) return; // Prevent multiple submissions
      this.loading = true;
      const formData = this.$refs.formSection.formData;

      // Check if formData contains all fields
      const emptyFields = Object.keys(formData).filter(
        (key) => formData[key] === "" || formData[key] === null
      );

      // Debugging: Check for empty fields
      if (emptyFields.length > 0) {
        console.log("Empty fields:", emptyFields);
        this.loading = false;
        return;
      }

      await this.save(formData);
    },

    async save(formData) {

      // remove undefined values from formData
      const cleanedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== undefined)
      );

      try {
        const apiUrlRegister = `${import.meta.env.VITE_API_BASE_URL}/register`;
        // Send formData to server
        await axios.post(apiUrlRegister, cleanedFormData);
      } catch (error) {
        console.error("Error while submitting form:", error);
      } finally {
        this.loading = false;
        this.$emit('next');
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
