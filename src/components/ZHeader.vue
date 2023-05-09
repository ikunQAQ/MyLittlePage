<template>
  <section class="header" id="home">
    <div class="header__back">
    </div>
    <div class="header__content">
      <div class="header__title-primary">
        <span>{{ titlePrimary }}</span>
      </div>
      <div class="header__title-secondary">
        <span>{{ titleSecondary }}</span>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ZHeader",
  data() {
    return {
      titlePrimary: '静水流长.',
      titleSecondary: '-这是我的个人主页-'
    }
  }
}
</script>