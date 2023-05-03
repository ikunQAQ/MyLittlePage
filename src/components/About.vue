<template>
  <section class="about">
    <h2 class="about__title-container">
      <span class="about__title-content">{{ TitleAbout }}</span>
    </h2>
    <div class="about__block-group">
      <div class="about__block" v-for="(i,index) of details" :key="index">
        {{ i }}
      </div>
    </div>
    <div class="about__details">
      <p>我是高德伟。</p>
      <p>花式撸管大赛冠军</p>
      <p>某不知名视频网站卑微年更区UP主</p>
      <p>强迫症、拖延症、懒癌晚期</p>
      <p>日常各种方面的花式自闭</p>
      <p>就读于某披着本科皮的大专</p>
      <p>未来想读研然后去北漂</p>
      <p>兴趣广泛:</p>
      <p>英雄联盟、APEX传奇、我的世界、原神...</p>
      <p>带着相机和好心情与喜欢的人环游世界</p>
      <p>请多指教!</p>
    </div>
  </section>

</template>

<script>
export default {
  name: "About",
  data() {
    return {
      TitleAbout: '关于我',
      details: ['信息1', '信息2', '信息3', '信息4']
    }
  }
}
</script>