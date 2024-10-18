<template>
  <div v-if="params.type === 'input'">
    <Label :value="params.label" :required="params.required" />
    <div class="input-group mb-3">
      <input type="text" class="form-control" :placeholder="params.label" :required="params.required"
        @input="updateInputValue" v-model="inputValue" />
    </div>
  </div>
</template>

<script>
import Date from "./Date.vue";
import Label from "./Label.vue";
export default {
  name: "FormItem",
  components: { Date, Label },
  props: ["data", "params"],
  data() {
    return {
      inputValue: "",
      options: []
    };
  },
  mounted() {
    if (this.params.type === 'select')
      this.options = this.params.options
  },
  methods: {
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.options = this.params.options
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.params.options.filter(v => v.label.toLowerCase().includes(needle))
      })
    },
    updateInputValue() {
      this.$emit('input', { name: this.params.value, value: this.inputValue });

    }


  },
  computed: {

  }
}
</script>









<!-- <div v-if="params.type === 'select'" :class="params.colspan">
    <Label :value="params.label" :required="params.required" />
    <q-select dense
          filled
          v-model="data[params.value]"
          :options="params.options"
          :use-input="params.searchable"
          clearable
          option-label="label"
          input-debounce="500"
          @filter="filterFn"
          emit-value
          map-options
          outlined
          :rules="[val => (!params.required || !!val) || 'هذا الحقل إلزامي']" />
  </div> -->
