<template>
  <div class="container">
    <section>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">التنسيقية اليسجنية بالعاصمة</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">الصفحة الرئيسية</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">تسجيل الدخول</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">لوحة التحكم</router-link>

            </li>
          </ul>
        </div>
      </nav>
    </section>

    <router-view />
  </div>
</template>
