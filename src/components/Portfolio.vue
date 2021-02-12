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

            <v-row align="center" justify="center" class="mt-5 media">
              <v-col cols="12" md="4" v-for="(project, i) in projects" :key="i">
                <v-img
                  v-bind:src="project.image"
                >
                </v-img>

                <h4 class="title mt-2">
                  {{project.title}}
                </h4>
                <p class="body-2">
                  <span class="welcome">
                    {{project.subtitle}}
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
  data:() => ({
        projects: [
            {
                image: "../assets/projects/calculator1.png",
                title: "Calculator",
                githubUrl: "https://github.com/eddanieles/JavaScript-Calculator",
                subtitle:
                "A simple calculator made to copy a iPhone calculator. It can perform basic math operations and evens follows order of operations.",
            },
            {
                image: "../assets/projects/battle1.png",
                title: "Marvel Character Battle",
                githubUrl: "https://github.com/lakeblack/nerd-fight/tree/eds",
                subtitle:
                'Given pre-built "fight algorithm" and "character ratings and rankings" files to simulate a battle between two Marvel Superheros.',
            },
            {
                image: "../assets/projects/budget2.png",
                title: "Budget Me",
                githubUrl: "https://github.com/lakeblack/final_budget_app",
                subtitle:
                "A web app to help assist users create budgets based on income, expenses and goals.",
            },
            {
                image: "../assets/projects/toasty2.png",
                title: "Toasty",
                githubUrl: "https://github.com/eddanieles/toasty_practice/",
                subtitle:
                'A different take to "wack-a-mole" to learn react/redux and understand actions/reducers/store/middleware.',
            },
            {
                image: "../assets/projects/book return.png",
                title: "Library Return",
                githubUrl: "https://github.com/eddanieles/libraryReturns",
                subtitle:
                "A vue project to simulate a library return app. The app analyzes the amount of pages read based on book category.",
            },
            {
                image: "../assets/projects/nyt app.png",
                title: "NY Times API",
                githubUrl: "https://github.com/eddanieles/nyt-app",
                subtitle:
                "Vue app utilizing the NY Times API. Users can search and save NY Times articles.",    
            },
        ],
    })
}
</script>

<style>

</style>