<template>
  <v-container fluid class="pa-0 ma-0" transition="fade-transition" > <!-- style="background-image: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 50%, rgba(38,50,56,1) 100%);" -->

    <!-- Container Hallo full-width ************************************************************************************** -->
    <v-container class="mb-16" data-aos="fade-in">
      <v-row class="mt-12">
        <v-col cols="12" lg="12" xl="12">

          <p class="text-h2" align="center">Hallo,<br> ich heisse Benjamin 👋🏼</p>
          <p align="center">
            <v-avatar size="30vh">
              <v-img :src="require('../img/start/me.jpg')"></v-img>
            </v-avatar>
          </p>
          <p class="text-h5" align="center">
            Ich mache Hosting und Webseiten für Privatpersonen, Vereine und KMU.
            <br>Und ich liebe Linux.
          </p>

        </v-col>
      </v-row>
    </v-container>

    <!-- Container Hosting full-width ************************************************************************************** -->
    <v-container fluid class="pa-0 ma-0" style="background-color: #263238;">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-img :src="require('../img/start/un_server.png')" max-height="260" contain class="mb-16 pa-10" data-aos="fade-in"></v-img><!-- undraw: #ECEFF1 -->

          </v-col>
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-card class="pb-6 mt-n16 mb-16" data-aos="fade-in">
              <v-card-title>Hosting</v-card-title>
              <v-card-text class="subtitle-1">
                <Content slot-key="hosting" />
              </v-card-text>
              <v-card-actions style="position: absolute; bottom: 0;">
                <v-btn color="blue-grey darken-4" dark to="/hosting">Erfahre mehr</v-btn>
              </v-card-actions>
            </v-card>
              
          </v-col>
        </v-row>
      </v-container>
    </v-container>

<!-- dumm< container gradient -->
<v-container fluid style="background-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 0%, rgba(38,50,56,1) 100%);" class="pa-0 ma-0"> 

    <!-- Container Entwicklung full-width ************************************************************************************** -->
    <v-container fluid class="pa-0 ma-0">
      <!-- hide on small screens - special container for xm and xs-->
      <v-container class="hidden-xs-only hidden-sm-only">
        <v-row justify="center">
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-card class="pb-6 mt-n16 mb-16" data-aos="fade-in">
              <v-card-title>Entwicklung</v-card-title>
              <v-card-text class="subtitle-1">
                <Content slot-key="entwicklung" />
              </v-card-text>
              <v-card-actions style="position: absolute; bottom: 0;">
                <v-btn color="blue-grey darken-4" dark to="/entwicklung">Erfahre mehr</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-img :src="require('../img/start/un_dev.png')" max-height="180" contain class="mn-5 mb-16 pa-10" data-aos="fade-in"></v-img>
              
          </v-col>
        </v-row>
      </v-container>
      <!-- special container for xs and sm -->
      <v-container class="hidden-md-and-up">
        <v-row justify="center">

          <v-col cols="12" md="5" lg="4" xl="4">

            <v-img :src="require('../img/start/un_dev.png')" max-height="180" contain class="mn-5 mb-16 pa-10" data-aos="fade-in"></v-img>
              
          </v-col>
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-card class="pb-6 mt-n16 mb-16" data-aos="fade-in">
              <v-card-title>Entwicklung</v-card-title>
              <v-card-text class="subtitle-1">
                <Content slot-key="entwicklung" />
              </v-card-text>
              <v-card-actions style="position: absolute; bottom: 0;">
                <v-btn color="blue-grey darken-4" dark to="/entwicklung">Erfahre mehr</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Container Linux full-width ************************************************************************************** -->
    <v-container fluid class="pa-0 ma-0">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-img :src="require('../img/start/un_hack.png')" max-height="300px" contain class="mt-n5 mb-16" data-aos="fade-in"></v-img>

          </v-col>
          <v-col cols="12" md="5" lg="4" xl="4">

            <v-card class="pb-6 mt-n16 mb-16" data-aos="fade-in">
              <v-card-title>Anleitungen</v-card-title>
              <v-card-text class="subtitle-1">
                <Content slot-key="linux" />
              </v-card-text>
              <v-card-actions style="position: absolute; bottom: 0;">
                <v-btn color="blue-grey darken-4" dark to="/howto">Erfahre mehr</v-btn>
              </v-card-actions>
            </v-card>
              
          </v-col>
        </v-row>
      </v-container>
    </v-container>

</v-container> <!-- dummy container end -->

  </v-container>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    setTimeout(() => {
        AOS.init({
            duration: 1000
        })
    }, 1000)
  },

  updated() {
    setTimeout(() => {
        AOS.init({
            duration: 1000
        })
    }, 1000)
  },
}
</script>

