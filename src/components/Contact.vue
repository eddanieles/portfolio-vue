<template>
  <div>
      <v-img
          src="../assets/machine learning.png"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-container class="fill-height">
            <v-row justify="center" align="center" class="mt-5">
              <v-col cols="12">
                <div class="pt-12 text-center">
                  <h3 class="display-1 font-weight-blod">
                    CONTACT ME
                  </h3>
                  <p class="body-2 my-3">
                    <span class="welcome">
                      I thought this was a cool feature and I didn't want to remove it.
                    </span>
                  </p>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Your Name*" solo light></v-text-field>
                <v-text-field label="Your Email*" solo light></v-text-field>
                <v-text-field label="Your Phone*" solo light></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="fill-height">
                <v-textarea
                  light
                  outlined
                  solo
                  name="input-7-4"
                  label="Your Message*"
                ></v-textarea>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-btn x-large color="accent">
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  a:link {
    text-decoration: none;
  }
</style>