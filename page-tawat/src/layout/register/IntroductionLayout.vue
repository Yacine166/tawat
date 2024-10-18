<template>

  <div class="form-container">
    <div>
      <h3 class="text-center p-3 ">البطاقة الشخصية</h3>
    </div>
    <div class="text-gray-600 mb-4 mt-2 text-lg fs-4 " style="direction: rtl;">
      <p class="mb-2 ">
        تسهر خلية الإحصاء التابعة للتنسيقية اليسجنية بالعاصمة على توفير قاعدة بيانات ضرورية وأساسية لكل نشاطات
        وأعمال التنسيقية.
      </p>
      <p class="mb-4">
        وعلى ضوء البيانات يتم تسهيل المهام وتحسين الأداء وتوحيد الجهود بين خلايا التنسيقية وكذا إستخراج الإستقراءات
        وتطوير خطط أعمال التنسيقية.
      </p>
      <p class="mb-4">
        وكل هذا لغرض تحسين خدمة الجالية اليسجنية بالعاصمة
        ولم شملها وإرقائها والوصول إلى التعاون الفعال بين افرادها.
      </p>
      <p class="mb-4">
        وللوصول إلى مبتغاها المنشود نرجو من فضيلتكم التكرم بتقديم المعلومات المطلوبة بدقة وصدق. وإذ يقدر المجتمع
        وقتك ومساهمتك في تعبئة الاستمارة، ندعو الله أن يتقبل سعيكم. قال تعالى
        <br>
        <span class="fw-bold italic">
          "وتعاونوا على البر والتقوى"
        </span>
      </p>
    </div>
    <div class="button-container d-flex justify-content-center">
      <button class="btn btn-primary btn-lg" @click="$emit('next')">البدأ</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "IntroductionLayout",

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
