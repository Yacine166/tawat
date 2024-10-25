<template>
  <StyledContainer>
    <div v-if="step === 'introduction'">
      <IntroductionLayout @next="step = 'RegistrationForm'" />
    </div>
    <div v-if="step === 'RegistrationForm'">
      <RegistrationFormLayout @next="step = 'Confirmation'" />
    </div>
    <div v-if="step === 'Confirmation'">
      <ConfirmationLayout @next="step = 'introduction'" />
    </div>
  </StyledContainer>
</template>



<script>
import StyledContainer from '../components/StyledContainer.vue';
import ConfirmationLayout from '../layout/register/ConfirmationLayout.vue';
import IntroductionLayout from '../layout/register/IntroductionLayout.vue';
import RegistrationFormLayout from '../layout/register/RegistrationFormLayout.vue';

export default {
  components: {
    StyledContainer,
    IntroductionLayout,
    RegistrationFormLayout,
    ConfirmationLayout,
  },

  data() {
    return {
      step: "introduction",

    }
  },
};
</script>
