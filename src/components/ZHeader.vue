<template>
  <section class="header">
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
  data(){
    return {
      titlePrimary:'琴团长不在家.',
      titleSecondary:'可莉随便炸!'
    }
  }
}
</script>

<style scoped>

</style>