<template>
  <section class="about" id="about">
    <h2 class="about__title-container">
      <span class="about__title-content">{{ TitleAbout }}</span>
    </h2>
    <div class="about__block-group">
      <div class="about__block" v-for="(i,index) of details" :key="index">
        {{ i }}
      </div>
    </div>
    <div class="about__details">
      <!--      <p>见字如面</p>-->

      <p v-for="p of content">{{ p }}</p>
    </div>
  </section>

</template>

<script>
export default {
  name: "About",
  data() {
    return {
      TitleAbout: '关于我',
      details: ['2002', 'WebDev', 'CQUT', '2.5次元'],
      content: ['在下张▢玮',
        '不过一介计算机系混子',
        '不足挂齿',
      ]
    }
  }
}
</script>