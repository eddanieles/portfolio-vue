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
            <v-col
              cols="12"
              md="4"
              v-for="(teammate, i) in teammates"
              :key="i"
              class="text-center"
            >
              <v-avatar size="224">
                <img v-bind:src=teammate.image>
              </v-avatar>

              <h4 class="title mt-2">
                {{teammate.name}}
              </h4>
              <p class="body-2">
                {{teammate.title}}
              </p>

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
  data: () => ({
    teammates: [
      {
        image: "../assets/crazy hair.jpg",
        name: "E Dizzle",
        title: "Lead Designer"
      },
      {
        image: "../assets/linkedin.jpg",
        name: "Mr. Danieles",
        title: "CEO/Software Engineer"
      },
      {
        image: "../assets/beard.jpg",
        name: "Roxy",
        title: "Brand Ambassador"
      }
    ]
  })
}
</script>

<style>

</style>