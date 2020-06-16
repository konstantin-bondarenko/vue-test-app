<template>
    <v-container fluid fill-height>
        <v-flex text-xs-center fill-height>
            <v-card height='90%' flat>
                <v-list-item two-line>
                <v-list-item-content class='mt-5 mx-2'>
                    <v-list-item-title class="headline font-weight-black mb-3">Log In</v-list-item-title>
                    <v-list-item-subtitle>Please enter your credentials to proceed</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-card-text>
                    <v-form class='mx-2'>
                        <v-text-field
                            :rules='inputRules'
                            label="Email"
                            v-model="email"
                            type="text"></v-text-field>
                        <v-text-field
                            :rules='inputRules'
                            label="Password"
                            v-model="password"
                            type="password"></v-text-field>
                    </v-form>
                    <v-flex row align-center justify-space-between class='mx-2'>
                        <label for='switch'>Remember this device</label>
                        <v-switch id='switch' reverse inset></v-switch>
                    </v-flex>
                </v-card-text>
            </v-card>
            <v-card-actions class='mx-2'>
                <v-btn dark width='100%' height='45' class='text-capitalize'>Log in</v-btn>
            </v-card-actions>       
        </v-flex>
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