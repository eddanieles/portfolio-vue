<template>
  <div>
      <v-sheet dark>
        <v-img
          src="../assets/code background.jpg"
          height="100vh"
          width="100vw"
        >
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <h3 class="display-2">
                  <span class="welcome">
                    Welcome To My Portfolio!
                  </span>
                </h3>
                <h1 class="display-4 my-8 font-weight-black">
                  IT'S ED DANIELES, BIOTCH!
                </h1>

                <v-btn
                  x-large
                  color="accent"
                  class="mt-5"
                  href="https://github.com/eddanieles/portfolio-vue"
                  target="_blank"
                >
                  <v-icon left>
                    mdi-folder
                  </v-icon>
                  View Github Repo
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>

      <v-container>
        <v-sheet color="transparent" id="SERVICES">
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              SERVICES
            </h3>
            <p class="body-2 my-3">
              <span class="welcome">
                Lorem ipsum dolor sit amet consectetur.
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
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
            {
                icon: "mdi-checkbox-multiple-marked",
                title: "Quality Assurance",
                subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
            {
                icon: "mdi-head-cog",
                title: "Subject Matter Expert",
                subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
        ],
    })
}
</script>

<style>

</style>