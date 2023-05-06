<template>
  <section class="record" id="record">
    <span class="record__title">一些值得记录的事...</span>

    <div class="record__map">
      <div class="record__btn record__btn-left btn" @click="toLeft">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
        </svg>
      </div>

      <div class="record__view">
        <div class="record__group" :style="{marginLeft:mLeft+'px'}">
          <div class="record__card" v-for="(i,index) of records" :key="index" :class="'p'+index">
            <img class="record__card_left" :src="randomImg(photo)" alt="">
            <div class="record__card_right">{{ i }}</div>
          </div>
        </div>
      </div>
      <div class="record__btn record__btn-right btn" @click="toRight">
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
        'yyh是头猪',
        'yyh是头猪',
        'yyh是头猪',
        'yyh是头猪',
        'yyh是头猪',
        'yyh是头猪',
        'yyh是头猪'],
      photo: ['./img/可莉1.png', './img/可莉2.png', './img/可莉3.png', './img/可莉4.png'],
      p: 0
    }
  },
  //随机 添加 屌图
  methods: {
    randomImg() {
      return this.photo[Math.floor(Math.random() * this.photo.length)];
    },
    move() {
      const obj = document.querySelector('.record__group');
      this.mLeft = -450 * this.p;
    },
    toRight() {
      if ( this.p < this.records.length-1) {
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