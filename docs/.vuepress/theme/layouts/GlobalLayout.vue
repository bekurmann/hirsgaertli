<template>

  <v-app>
    <v-app-bar
    app
    color="blue-grey darken-4"
    dark
    clipped-left
    >

      <v-app-bar-nav-icon @click="drawer = !drawer" aria-label="Menu">
        <v-hover v-slot:default="{ hover }">
          <v-icon v-if="hover">mdi-rocket</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-hover>
      </v-app-bar-nav-icon> <!-- mdi-dots-vertical -->


      <router-link to="/">
        <!-- <v-img
          class="mx-3"
          :src="require('@/assets/logo_w.png')"
          max-height="90"
          max-width="90"
          contain
        ></v-img> -->
      </router-link>
      <v-toolbar-title>bk/ - hirsgaertli.ch</v-toolbar-title>
      <v-spacer></v-spacer>
      <SearchBox/>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/bekurmann" target="_blank" rel="noopener" aria-label="GitHub"><v-icon>mdi-github</v-icon></v-btn>
      <v-btn icon href="https://twitter.com/bekurmann" target="_blank" rel="noopener" aria-label="Twitter" ><v-icon>mdi-twitter</v-icon></v-btn>
    </v-app-bar>

    <v-navigation-drawer
    app
    v-model="drawer"
    clipped
    value="false"
    disable-resize-watcher
    >

      <v-list>

        <v-list-item-group>
          <v-list-item nav link to="/" aria-label="Home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Hallo</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nav link to="/hosting" aria-label="Hosting">
            <v-list-item-icon>
              <v-icon>mdi-server</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Hosting</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nav link to="/entwicklung" aria-label="Entwicklung">
            <v-list-item-icon>
              <v-icon>mdi-monitor-cellphone-star</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Entwicklung</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- begin group blog -->
          
          <v-list-group prepend-icon="mdi-post-outline" no-action color="blue-grey darken-4">

            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Blog</v-list-item-title>
              </v-list-item-content>
            </template>
   

            <v-list-item link to="/blog/category/howto/">       
              <v-list-item-title>Anleitungen</v-list-item-title>         
              <v-list-item-icon><v-icon>mdi-text-box-search-outline</v-icon></v-list-item-icon>  
            </v-list-item>

            <!-- <v-list-item nav link to="/blog/category/code/">  
              <v-list-item-title>Code</v-list-item-title>     
              <v-list-item-icon><v-icon>mdi-gamepad-variant-outline</v-icon></v-list-item-icon>     
            </v-list-item> -->

          </v-list-group>
          <!-- end group blog -->

          <v-list-item nav link to="/kontakt" aria-label="Kontakt">
            <v-list-item-icon>
              <v-icon>mdi-human-greeting-proximity</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Kontakt</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-list>
          <v-list-item link to="/impressum" aria-label="Impressum">
            <v-list-item-content>
              <v-list-item-title class="text-caption">Impressum</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>

    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="ma-0 pa-0">

        
        <component :is="layout" aria-label="main section of website" />

      </v-container>
    </v-main>

  </v-app>

</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'App',

  components: {
    SearchBox
  },

  data: () => ({
    drawer: false,
  }),


  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style scoped>
.list-item-title {
    white-space: normal !important;
    text-overflow: wrap !important;
    word-wrap: break-word; 
}
</style>
