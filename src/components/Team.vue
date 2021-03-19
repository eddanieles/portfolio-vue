<template>
  <div>
      <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              MEET THE TEAM
            </h3>
            <p class="body-2 my-3">
              <span class="welcome">
                Team of one but more of a team player.
              </span>
            </p>
          </div>

          <v-row justify="center" align="center" class="mt-5">
            <!-- <v-col
              cols="12"
              md="4"
              v-for="(item, i) in 3"
              :key="i"
              class="text-center"
            >
              
            </v-col> -->
            <v-col
              cols="12"
              md="4"
              class="text-center"
            >
              <v-avatar size="224">
                <v-img src="../assets/crazy hair.jpg"></v-img>
              </v-avatar>

              <h4 class="title mt-2">
                E Dizzle
              </h4>
              <p class="body-2">
                Lead Designer
              </p>

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
            <v-col
              cols="12"
              md="4"
              class="text-center"
            >
              <v-avatar size="224">
                <v-img src="../assets/linkedin.jpg"></v-img>
              </v-avatar>

              <h4 class="title mt-2">
                Mr. Danieles
              </h4>
              <p class="body-2">
                Software Engineer
              </p>

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
            <v-col
              cols="12"
              md="4"
              class="text-center"
            >
              <v-avatar size="224">
                <v-img src="../assets/beard.jpg"></v-img>
              </v-avatar>

              <h4 class="title mt-2">
                Roxy
              </h4>
              <p class="body-2">
                Brand Ambassador
              </p>

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

            <v-col cols="12" md="8" class="text-center mt-5 body-2">
              <p>
                I have been very fortunate to work with some amazing people. I hope to bring my skills and be part of your team.
              </p>
            </v-col>
          </v-row>
        </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>