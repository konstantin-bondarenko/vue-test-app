<template>
  <v-app :style="{background:'#E5E5E5'}">
    <v-app-bar app flat>
      <span>The Test</span>
    </v-app-bar>

    <v-content>
      <Desktop class='hidden-sm-and-down' />
    </v-content>
  </v-app>
</template>

<script>
import Desktop from '@/components/Desktop'
export default {
  name: 'App',

  components: {
    Desktop
  },

  data: () => ({
    //
  }),
};
</script>
