<template>
  <div class="htmlClass">
    <h1>{{ name }}</h1>
    <h2>{{ surname }}</h2>
    <h3>{{ studentid }}</h3>
    <h4>{{ nickname }}</h4>
  </div>
</template>


<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      name: 'บวรพงศ์',
      surname:'นาคสุข',
      studentid: '6604101344',
      nickname: 'ตี๋',
    }
  },
}
</script>

<style scoped></style>
