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
                <h1 class="display-4 my-8 font-weight-black">
                  Welcome To My Portfolio!
                </h1>
                <h3 class="display-2">
                  <p class="welcome">
                    ED DANIELES
                  </p>
                  <p class="welcome contactInfo">
                    Orlando, FL
                  </p>
                  <p class="welcome contactInfo">
                    732-864-6339
                  </p>
                  <p class="welcome contactInfo">
                    ed.danieles@gmail.com
                  </p>
                </h3>
                

                <div>
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
                </div>
                
                <div>
                  <v-btn
                    x-large
                    color="accent"
                    class="mt-5"
                    href="https://docs.google.com/document/d/1NixXJ-D3ZzsuPydFHs8aLFodjuK6Z-jqEoxJoS1nLhs/edit?usp=sharing"
                    target="_blank"
                  >
                    <v-icon left>
                      mdi-card-text
                    </v-icon>
                    View Resume
                  </v-btn>
                </div>
                
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>