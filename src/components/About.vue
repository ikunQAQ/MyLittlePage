<template>
  <section class="about" id="about">
    <h2 class="about__title-container">
      <span class="about__title-content"
            data-aos="fade-up" data-aos-duration="200">{{ TitleAbout }}</span>
    </h2>
    <div class="about__block-group">
      <div data-aos="fade-up" :data-aos-duration="600*index"
           class="about__block" v-for="(i,index) of details" :key="index">
        {{ i }}
      </div>
    </div>
    <div class="about__details">

      <p v-for="(p,index) of content" :data-aos="computeAosP(index)" :data-aos-duration="300*(index+details.length*2)">
        {{ p }}</p>
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
      content: ['在下▢▢玮',
        '一介计算机系混子',
        '不足挂齿',
          '某知名视频网站的不知名年更区UP主',
          '不知道些什么占行数',
        '道些什么占行数',
        '什么占行数',
        '不知道些什么占行数'
      ]
    }
  },
  methods: {
    //计算p ele aos绑定的属性
    computeAosP(index) {
      if (index % 2) {
        return 'fade-right';
      } else
        return 'fade-left';
    }
  }
}
</script>