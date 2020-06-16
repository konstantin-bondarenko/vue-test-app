<template>
  <v-app :style="{background:'#E5E5E5'}">
    <v-app-bar app flat>
      <span>The Test</span>
    </v-app-bar>

    <v-content>
      <Desktop class='hidden-xs-only' />
      <Mobile class='hidden-sm-and-up'/>
    </v-content>
  </v-app>
</template>

<script>
import Desktop from '@/components/Desktop'
import Mobile from '@/components/Mobile'
export default {
  name: 'App',

  components: {
    Desktop, Mobile
  }
};
</script>
