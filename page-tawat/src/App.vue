<template>
  <div class="container">
    <section>
      <nav class="navbar navbar-expand-lg navbar-light border-bottom-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">التنسيقية اليسجنية بالعاصمة</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">الصفحة الرئيسية</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isAuthenticated" to="/login" class="nav-link">تسجيل الدخول</router-link>
            </li>
            <li class="nav-item">
              <div @click="logout" v-if="isAuthenticated" class="nav-link">تسجيل الخروج</div>
            </li>
            <li class="nav-item">
              <router-link v-if="isAuthenticated" to="/" class="nav-link">لوحة التحكم</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>

    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './functions/store';
export default {
  computed: {
    ...mapState(['isAuthenticated']),
    isAuthenticated() {
      return !!localStorage.getItem('authToken');
    }
  },
  mounted() {
    // Redirect to Introduction if not authenticated
    if (!this.isAuthenticated) {
      this.$router.push({ name: 'Introduction' });
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push({ name: 'Introduction' });
      store.dispatch('logout');
    }
  }
}
</script>
! ds
