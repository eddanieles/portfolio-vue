<template>
  <div>
      <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              PORTFOLIO
            </h3>
            <p class="body-2 my-3">
              <span class="welcome">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </p>

            <v-row align="center" justify="center" class="mt-5">
              <v-col cols="12" md="4" v-for="(item, i) in 6" :key="i">
                <v-img
                  src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_1280.jpg"
                >
                </v-img>

                <h4 class="title mt-2">
                  Threads
                </h4>
                <p class="body-2">
                  <span class="welcome">
                    Illustration
                  </span>
                </p>
              </v-col>
            </v-row>
          </div>
        </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>