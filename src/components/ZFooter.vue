<template>
  <section class="footer" id="footer">
    <!--    <div class="footer__logo">-&#45;&#45;&#45;&#45;这里放logo-&#45;&#45;&#45;&#45;&#45;&#45;</div>-->

    <div class="footer_left-side">
      <div class="gradient-title footer__link-title">与我有关</div>
      <div class="footer__link">
        <a href="https://www.bilibili.com">bilibili</a>
        <a href="https://www.vviw.top/blog">blog</a>
        <a href="https://www.vviw.top/index">作品集</a>
        <a href="https://github.com/ikunQAQ">github</a>
      </div>
    </div>
    <div class="footer_right-side">
      <div class="gradient-title footer__link-title">开发日志</div>
      <div class="footer__link">
        <a href="#details" @click="showDetails">作品简介</a>
        <a href="#copyrightNotice" @click="showCopyrightNotice">版权声明</a>
      </div>
    </div>
  </section>

  <div class="popup" @click="backToPage" :class="state">
    <div class="popup-content" @click.stop="" id="details">
      作品简介
    </div>
    <div class="popup-content" @click.stop="" id="copyrightNotice">
      版权声明
    </div>
  </div>
</template>
<script>

export default {
  name: "ZFooter",
  data() {
    return {
      state: 'popup_init'
    }
  },

  methods: {
    showDetails() {
      this.state = 'popup_show';
    },
    showCopyrightNotice() {
      this.state = 'popup_show';
    },
    backToPage() {
      this.state = 'popup_init';
      history.go(-1);
      // 退回路由跳转 , 不然会出 两个tab同时切换的 bug
    }
  }
}
</script>