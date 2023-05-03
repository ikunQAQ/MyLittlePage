<template>
  <ZHeader></ZHeader>
  <About></About>
  <Calendar></Calendar>
  <Record></Record>
  <ZFooter></ZFooter>
  <Navigation></Navigation>
</template>

<script>
import ZHeader from "./components/ZHeader.vue";
import Navigation from './components/Navigation.vue';
import About from './components/About.vue';
import Calendar from "./components/Calendar.vue";
import Record from './components/Record.vue';
import ZFooter from "./components/ZFooter.vue";

export default {
  name: "App",
  components: {ZHeader, Navigation, About, Calendar, Record, ZFooter}
}
</script>

<style>
</style>