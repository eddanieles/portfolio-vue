<template>
  <div>
      <v-container>
        <v-sheet color="transparent" id="SERVICES">
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              SERVICES
            </h3>
            <p class="body-2 my-3">
              <span class="welcome">
                Few of the many things I can provide.
              </span>
            </p>
          </div>

          <v-row justify="center" align="center" class="mt-5">
            <v-col
              cols="12"
              md="4"
              v-for="(item, i) in services"
              :key="i"
              class="text-center"
            >
              <v-icon size="128" color="accent">
                {{ item.icon }}
              </v-icon>
              <h4 class="title my-2">
                {{ item.title }}
              </h4>
              <p>
                {{ item.subtitle }}
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
  </div>
</template>

<script>
export default {
    data:() => ({
        services: [
            {
                icon: "mdi-desktop-mac-dashboard",
                title: "Front End Development",
                subtitle:
                "Began learning Javscript and React in 2016. Learning more about Vue and have been really enjoying it.",
            },
            {
                icon: "mdi-checkbox-multiple-marked",
                title: "Quality Assurance",
                subtitle:
                "Previous position was as a QA Engineer. Experienced in both manual and automated testing. Worked with Selenium and TestRails.",
            },
            {
                icon: "mdi-head-cog",
                title: "Subject Matter Expert",
                subtitle:
                "Spent many years as a technical customer service representative. I like to know the in's and out's of a system and how to optimize the customer experience.",
            },
        ],
    })
}
</script>

<style>

</style>