<template>
  <div v-if="!!value" class="flex items-center">
    <div  class="text-lg fs-5 m-2 mt-2" > {{value}} </div>
    <span v-if="required" class="text-red-4 text-lg font-bold"> * </span>
  </div>

</template>

<script>
export default {

  name: "Label",
  props: ['value', 'required']
}
</script>

<style scoped>

</style>
