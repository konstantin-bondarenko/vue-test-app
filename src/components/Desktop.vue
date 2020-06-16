<template>
 <v-container class="fill-height" fluid>
  <v-row  align="center" justify="center">
      <v-card flat class="ma-50" width='500' max-height='500'>
        <v-list-item two-line>
          <v-list-item-content class='mt-10 text-center'>
            <v-list-item-title class="headline font-weight-black mb-3">Log In</v-list-item-title>
            <v-list-item-subtitle>Please enter your credentials to proceed</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="12">
              <v-form class='mx-15'>
              <v-text-field
                label="Email"
                v-model="email"
                type="text"></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"></v-text-field>
            </v-form>
            </v-col>
          </v-row>
        </v-card-text>
          <v-card-actions class='mx-15'>
            <v-flex>
              <v-checkbox :label="'Remember this device'"></v-checkbox>
              <v-btn dark width='100%' height='45' class='mt-5 mb-10'>Log in</v-btn>
            </v-flex>
          </v-card-actions>
      </v-card>
  </v-row>
 </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
    }
  }
}
</script>