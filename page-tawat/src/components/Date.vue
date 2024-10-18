<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-1/2 md:w-1/4 px-2">
      <div class="my-1">اليوم</div>
      <q-input
        dense
        filled
        type="number"
        min="1"
        max="31"
        :model-value="date.day"
        @change="changeDate"
        @update:model-value="(v)=>changeDate(v, 'day')"
      />
    </div>
    <div class="w-1/2 md:w-1/4 px-2">
      <div class="my-1">الشهر</div>
      <q-select
        dense
        filled
        :model-value="date.month"
        @update:model-value="(v)=>changeDate(v, 'month')"
        :options="monthOptions"
        clearable
        option-label="label"
        input-debounce="500"
        emit-value
        map-options
        outlined
      />
    </div>
    <div class="w-1/2 px-2">
      <div class="my-1">العام</div>
      <q-input
        dense
        type="number"
        filled
        :model-value="date.year"
        @update:model-value="(v)=>changeDate(v, 'year')"
      />
    </div>
  </div>
</template>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Date",
  props: ['modelValue'],
  data(){
    return {
      date: {},
      daysInMonth: {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      },
      monthOptions: [
        {"label":"جانفي","value":"01"},
        {"label":"فيفري","value":"02"},
        {"label":"مارس","value":"03"},
        {"label":"إفريل","value":"04"},
        {"label":"ماي","value":"05"},
        {"label":"جوان","value":"06"},
        {"label":"جويلية","value":"07"},
        {"label":"اوت","value":"08"},
        {"label":"سبتمبر","value":"09"},
        {"label":"أكتوبر","value":"10"},
        {"label":"نوفمبر","value":"11"},
        {"label":"ديسمبر","value":"12"}
      ]
    }
  },
  mounted() {
    this.setDate()
  },
  methods: {
    changeDate(v, key){
      if(key === "day" && v > 31) return
      if(this.date.month && this.date.day)
      {
        if(key === "day" && v > this.daysInMonth[+this.date.month]) return
        if(key === "month" && +this.date.day > this.daysInMonth[+v]) return
      }

      let newDate ={...this.date, [key]: v}
      this.$emit('update:model-value', `${newDate.year}-${newDate.month}-${newDate.day}`)
    },
    setDate(){
      this.date = {
        year: this.modelValue? this.modelValue.split("-")[0] : null,
        month: this.modelValue? this.modelValue.split("-")[1] : "01",
        day: this.modelValue? this.modelValue.split("-")[2] : null,
      }
    }
  },
  watch: {
    modelValue(){
      this.setDate()
    }
  }
})
</script>



<style scoped>

</style>
