<template>
  <div>
    <v-footer>
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col>
            <div>
              &copy;2020<!-- {{ new Date().getFullYear() }}   -->
              <a href="https://github.com/AGDholo" text class="accent--text" target="_blank">
                https://github.com/AGDholo
              </a>
            </div>
          </v-col>

          <v-col class="text-center">
            <div>
              <v-btn icon color="primary">
                <a href="https://twitter.com/EdDanieles" target="_blank"> 
                  <v-icon>
                    mdi-twitter
                  </v-icon> 
                </a>
              </v-btn>
              <v-btn icon color="primary">
                <a href="https://www.facebook.com/ed.daniels.921/" target="_blank"> 
                  <v-icon>
                    mdi-facebook
                  </v-icon> 
                </a>
              </v-btn>
              <v-btn icon color="primary">
                <a href="https://www.linkedin.com/in/ed-danieles-6a183871/" target="_blank"> 
                  <v-icon>
                    mdi-linkedin
                  </v-icon> 
                </a>
              </v-btn>
            </div>
          </v-col>

          <v-col class="text-right">
            <a text class="accent--text" href="https://heroui.net/" target="_blank">
              Privacy Policy
            </a>
            <a text class="pl-2 accent--text" href="https://twitter.com/P1kaP1kaChu_" target="_blank">
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