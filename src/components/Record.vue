<template>
  <section class="record" id="record">
    <span class="record__title"
          data-aos="fade-up" data-aos-duration="600">一些值得记录的事...</span>

    <div class="record__map">
      <div class="record__btn record__btn-left btn" @click="toLeft"
           data-aos="flip-left" data-aos-duration="300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
        </svg>
      </div>

      <div class="record__view">
        <div class="record__group" :style="{marginLeft:mLeft+'px'}">
          <div class="record__card" v-for="(i,index) of records" :key="index" :class="'p'+index"
               data-aos="flip-left" :data-aos-duration="300*(index+1)">
            <img class="record__card_left" :src="randomImg(photo)" alt="">
            <div class="record__card_right">{{ i }}</div>
          </div>
        </div>
      </div>
      <div class="record__btn record__btn-right btn" @click="toRight" data-aos="flip-left" data-aos-duration="1200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Record",
  data() {
    return {
      mLeft: 0,
      records: [
        'CET4绝缘体',
        'card2',
        'card3',
        'card4',
        'card5',
        'card6',
        'card7',
        'card8'],
      photo: ['./img/keli1.png', './img/keli2.png', './img/keli3.png', './img/keli4.png'],
      p: 0
    }
  },
  //随机 添加 屌图
  methods: {
    randomImg() {
      return this.photo[Math.floor(Math.random() * this.photo.length)];
    },
    move() {
      this.mLeft = -450 * this.p;
    },
    toRight() {
      if (this.p < this.records.length - 1) {
        this.move(this.p++)
      }
    },
    toLeft() {
      if (this.p >= 0) {
        this.move(this.p--)
      }
    }
  }
}
</script>