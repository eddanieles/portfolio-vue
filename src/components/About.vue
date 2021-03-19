<template>
  <div>
      <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              ABOUT
            </h3>
            <p class="body-2 my-3">
              <span class="welcome">
                Stops I made in the past year. Hopefully your company is the last stop.
              </span>
            </p>
          </div>

          <v-timeline>
            <!-- <v-timeline-item v-for="(n, i) in 4" :key="i" large>
        
            </v-timeline-item> -->
            <v-timeline-item large>
              <template v-slot:icon>
                <v-avatar>
                  <img src="../assets/monmouth u.jpeg" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2007-2009</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >Monmouth University</v-card-title
                >
                <v-card-text class="body-2">
                  Earned a Bachelor's degree in Mathematics. Merit award winner for high GPA in program. 
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:icon>
                <v-avatar>
                  <img src="../assets/gdit.jpg" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2009-2013</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >GDIT</v-card-title
                >
                <v-card-text class="body-2">
                  Gained government issued secret security clearance. System Administrator for various military training systems.
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:icon>
                <v-avatar>
                  <img src="../assets/icims.png" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2013-2015</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >iCIMS</v-card-title
                >
                <v-card-text class="body-2">
                  Product Manager for HR software system.
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:icon>
                <v-avatar>
                  <img src="../assets/the iron yard.png" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2016</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >The Iron Yard</v-card-title
                >
                <v-card-text class="body-2">
                  Learned front end development with specialization in React framework.
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:icon>
                <v-avatar>
                  <img src="../assets/bullhorn.png" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2017-2020</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >Bullhorn</v-card-title
                >
                <v-card-text class="body-2">
                  Wore various hats: Customer Support, Junior Developer, QA Engineer. Facilitated releases. Jira, Github, Mongo, Angular, Node, Express (MEAN stack). 
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>