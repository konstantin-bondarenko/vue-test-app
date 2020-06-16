<template>
 <v-container class="fill-height" fluid>
  <v-row  align="center" justify="center">
      <v-card flat class="text-xs-center ma-3" width='500' height='500'>
          <v-card-title class="justify-center">Log In</v-card-title>
          <span>Please enter your credentials to proceed</span>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                v-model="login"
                type="text"></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-checkbox :label="'Remember this device'"></v-checkbox>
          <v-card-actions class="justify-center">
              <v-btn dark width='100%'>Log in</v-btn>
          </v-card-actions>
      </v-card>
  </v-row>
 </v-container>
</template>

<script>
export default {
  data(){
    return {
      login: '',
      password: '',
    }
  }
}
</script>