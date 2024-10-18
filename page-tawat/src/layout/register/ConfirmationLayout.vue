<template>
  <div class="form-container">
    <div>
      <h3 class="text-center p-3 ">التنسيقية اليسجنية بالعاصمة</h3>
    </div>
    <p class="text-center text-gray-600 mb-4 mt-2 fs-4" >شكرًا لتعاونك ومشاركتك المعلومات معنا</p>
    <div class="button-container d-flex justify-content-center">
      <button class="btn btn-primary btn-lg" @click="$emit('next')">صفحة الرائسية</button>
    </div>
  </div>

</template>
<script>
export default {
  name: "ConfirmationLayout",
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
