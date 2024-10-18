<template>
  <form id="form-btn">
    <div v-for="(section, index) in sections" :key="index">
      <div class="w-full md:w-2/3 px-4 py-6 mt-4">
        <div class="flex items-center mb-8">
          <div class="fw-bold text-lg text-primary fs-1">{{ index + 1 }} {{ section.title }} </div>
        </div>
        <div class=" row">
          <FormItem class="mr-4 col" v-for="(question, Index) in section.questions" :params="question" :key="Index"
            @input="updateFormData"
            />
        </div>
      </div>
      <hr>
    </div>
  </form>
</template>


<script>
import general from "../forms/general.json";
import FormItem from "./FormItem.vue";

export default {
  name: "FormSection",

  components: { FormItem },
  data() {
    return {
      sections: [
        { questions: general, title: "المعلومات العامة" },
      ],
      formData: {
        first_name: "",
        last_name: "",
        father_first_name: "",
        grand_father_first_name: "",
      },
    }
  },
  methods: {
    updateFormData({ name, value }) {
      this.formData = { ...this.formData, [name]: value };
    }
  }
}
</script>

<style scoped></style>
