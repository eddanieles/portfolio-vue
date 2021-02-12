<template>
  <div>
      <v-navigation-drawer
      v-if="!$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="#f5f5f5"
    >
      <v-list nav color="#f5f5f5">
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          @click="$vuetify.goTo(`#${item}`)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      fixed
      app
      elevate-on-scroll
      class="appbar"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.lgAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="font-weight-bold headline"
            >
              <v-icon large color="accent">
                mdi-emoticon-cool
              </v-icon>
              My<span class="accent--text">Portfolio</span>
            </v-toolbar-title>
          </v-col>
          <v-col class="text-right" v-if="$vuetify.breakpoint.lgAndUp">
            <v-btn
              text
              v-for="(item, i) in btnItems"
              :key="i"
              @click="$vuetify.goTo(`#${item}`)"
            >
              {{ item }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        drawer: null,
        btnItems: ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"],
    })
}
</script>

<style>

</style>