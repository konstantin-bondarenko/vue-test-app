<template>
  <div style="display: flex">
    <div
      v-for="name of names"
      :key="name">
      <h1>Hello {{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: ['Alex', 'Margo', 'Illaoi']
    }
  }
}
</script>
