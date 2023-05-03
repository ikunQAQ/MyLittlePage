<template>
  <!--
  checkbox hack!!!
  -->
  <section class="nav">
    <input type="checkbox" id="nav__checkbox" class="nav__checkbox">

    <label for="nav__checkbox" class="nav__label">
      <span class="nav__front">
          <span class="nav__icon">&nbsp;</span>
      </span>
    </label>


    <div class="nav__back">&nbsp;</div>

    <div class="nav__content">
      <ul class="nav__content_list">
        <li class="nav__content_item"
            v-for="(i,index) of nav" :key="index"><a :href="i.target" class="nav__content_link">
          <span>0{{ index + 1 }}</span> {{ i.name }} </a></li>
      </ul>
    </div>

  </section>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      /*checkboxHack: false,
      checking: false,*/
      nav: [{
        name: 'Home',
        target: '#'
      }, {
        name: 'About',
        target: '#'
      }, {
        name: 'Items',
        target: '#'
      }, {
        name: 'Footer',
        target: '#'
      }]
    }
  },
  methods: {
    /*NavCheck() {
      //添加0.8秒延迟 , 怕用什么连点器把哥们的小霸王搞死机
      if (!this.checking) {
        this.checking = true;
        setTimeout(() => {
          this.checkboxHack = !this.checkboxHack;
          this.checking = false;
        }, 800);
      }*/
  }
}
</script>

<style scoped>

</style>