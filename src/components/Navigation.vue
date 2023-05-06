<template>
  <!--
  checkbox hack!!!
  -->
  <section class="nav">
    <input type="checkbox" id="nav__checkbox" class="nav__checkbox">

    <label for="nav__checkbox" class="nav__label">
      <span class="nav__front">
          <span class="nav__icon"></span>
      </span>
    </label>

    <div class="nav__back"></div>

    <div class="nav__content">
      <ul class="nav__content_list">
        <li class="nav__content_item"
            v-for="(i,index) of nav" :key="index">
          <a :href="i.target" class="nav__content_link" @click="backToPage">
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
        target: '#home'
      }, {
        name: 'About',
        target: '#about'
      }, {
        name: 'Calendar',
        target: '#calendar'
      }, {
        name: 'Record',
        target: '#record'
      }, {
        name: 'Footer',
        target: '#footer'
      }]
    }
  },
  methods: {
    backToPage() {
      //checkbox hack 跳转后 取消 Nav界面, 路由退回
      document.querySelector('#nav__checkbox').checked = false;
      history.go(0);
    }
  },
  NavCheck() {
    //添加0.8秒延迟 , 防止连点
    if (!this.checking) {
      this.checking = true;
      setTimeout(() => {
        this.checkboxHack = !this.checkboxHack;
        this.checking = false;
      }, 800);
    }
  }
}
</script>