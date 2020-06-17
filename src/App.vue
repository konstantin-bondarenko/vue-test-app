<template>
  <v-app>
    <v-app-bar app flat color='white' :class="{'elevation-1': $vuetify.breakpoint.xs}">
      <span>The Test</span>
    </v-app-bar>

    <v-main>
      <Desktop />
    </v-main>
  </v-app>
</template>

<script>
import Desktop from '@/components/Desktop'
export default {
  name: 'App',

  components: {
    Desktop
  }
};
</script>