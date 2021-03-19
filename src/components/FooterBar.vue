<template>
  <div>
    <v-footer>
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col>
            <div>
              &copy;{{ new Date().getFullYear() }}  
              <a href="https://github.com/AGDholo" text class="accent--text">
                https://github.com/AGDholo
              </a>
            </div>
          </v-col>

          <v-col class="text-center">
            <div>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-instagram
                </v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col class="text-right">
            <a text class="accent--text">
              Privacy Policy
            </a>
            <a text class="pl-2 accent--text">
              Terms of Use
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>