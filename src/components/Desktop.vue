<template>
 <v-container 
  class="fill-height" 
  fluid :style="$vuetify.breakpoint.xs ? {background:'#fff'} : {background:'#E5E5E5'}"
  >
    <v-layout 
      row 
      :align-center="!$vuetify.breakpoint.xs ? true : false" 
      justify-center
      >
      <v-card 
        flat 
        :width="$vuetify.breakpoint.xs ? '100%' : '500'" 
        :height="$vuetify.breakpoint.xs ? '90%' : '500'"
        >
        <v-list-item two-line>
          <v-list-item-content :class="{'mt-10 text-center': !$vuetify.breakpoint.xs}">
            <v-list-item-title class="headline font-weight-black mb-3">Log In</v-list-item-title>
            <v-list-item-subtitle>Please enter your credentials to proceed</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="12">
              <v-form :class="{'mx-14': !$vuetify.breakpoint.xs}">
                <v-text-field
                  :rules='inputRules'
                  label="Email"
                  v-model="email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  :rules='inputRules'
                  label="Password"
                  v-model="password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-col>
            <v-flex row align-center justify-space-between class='mx-3 hidden-sm-and-up'>
              <label for='switch'>Remember this device</label>
              <v-switch id='switch' reverse inset></v-switch>
            </v-flex>
          </v-row>
        </v-card-text>
          <v-card-actions class='mx-15 hidden-xs-only'>
            <v-flex>
              <v-checkbox :label="'Remember this device'"></v-checkbox>
              <v-btn dark width='100%' height='45' class='mt-5 mb-10 text-capitalize'>Log in</v-btn>
            </v-flex>
          </v-card-actions>
      </v-card>
      <v-flex class='mx-2 hidden-sm-and-up'>
        <v-card-actions>
          <v-btn dark width='100%' height='45' class='text-capitalize'>Log in</v-btn>
        </v-card-actions> 
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  }
}
</script>