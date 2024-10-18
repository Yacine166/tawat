<template>
  <div class="styled-container">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "StyledContainer",
};
</script>

<style scoped>
.styled-container {
  margin: 3rem 0 ;
  border: 2px solid rgb(215, 215, 215);
  border-radius: 8px;
  padding: 4rem;

}
</style>

