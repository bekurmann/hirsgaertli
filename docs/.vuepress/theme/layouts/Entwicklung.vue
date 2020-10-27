<template>
  <v-container fluid class="pa-0 ma-0" transition="fade-transition" style="background-image: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 50%, rgba(38,50,56,1) 100%);"> 

    <!-- Container Hallo full-width ************************************************************************************** -->
    <v-container data-aos="zoom-in">
      <v-row class="mt-12">
        <v-col cols="12" lg="12" xl="12">

          <p class="text-h2" align="center">Ich baue deine Webseite. 🤸🏼‍♂️</p>

        </v-col>
      </v-row>
      <v-row>
        <v-col>

              <v-img :src="require('../img/entwicklung/mockup.png')" max-height="550px" contain></v-img>

          <p class="text-h5 mt-10" align="center">
            Moderne, responsive Webseiten. So, wie sie dir gefallen. 
            <br>Ich begleite dich von der Konzeption bis zur Aufschaltung - schnell, unkompliziert und transparent - in 5 einfachen Schritten.
            <br>
          </p>

        </v-col>
      </v-row>
    </v-container>
    <v-container>
            <v-row justify="center">
              <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch"> 
                <v-card data-aos="fade-in">
                  <v-img :src="require('../img/entwicklung/wp_elementor.png')"></v-img>
                    <v-card-title>Wordpress und Elementor</v-card-title>
                    <v-card-subtitle>Ein auf deine Bedürfnisse abgestimmtes Elementor Theme</v-card-subtitle>
                    <v-card-text></v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch">
                <v-card data-aos="fade-in">
                  <v-img :src="require('../img/entwicklung/cms_vue.png')"></v-img>
                    <v-card-title>CMS und Vue.js</v-card-title>
                    <v-card-subtitle>Superschnelles, modernes Frontend und ein CMS deiner Wahl als Backend</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
    </v-container>

    <!-- Container Schritte full-width ************************************************************************************** -->
    <v-container fluid class="pa-0 ma-0">
      <v-container data-aos="fade-in">
        <v-row justify="center" align="center">
          <v-col cols="12" md="10" lg="8" xl="8">

            <v-card color="blue-grey darken-4" dark>
                <v-card-title>So funktioniert's<br>1. Planung</v-card-title>
                <v-card-text>

                  <!-- Container Planung *********************************************************************************************** -->
                  <v-container>
                    <v-card light>
                    <v-row justify="center">
                      <v-col cols="12" md="8" lg="8" xl="8">         
                    
                        <v-card-title>Nimm mal ein Blatt Papier</v-card-title>
                        <v-card-text>
                          <Content slot-key="planung" />
                        </v-card-text>
                        
                      </v-col>

                      <v-col cols="12" md="4" lg="4" xl="4">
                        <!-- 
                          undraw coloring

                          accentcolor: #2196F3

                          grey bright: #eceff1

                          (vuetify blue-grey darken 1-3)
                          dark #546E7A
                          darker: #455A64
                          super dark: #37474F
                        -->
                        <v-card-text align="center"><v-img :src="require('../img/entwicklung/un_planung.png')" max-width="300px"></v-img></v-card-text> 
                      </v-col>
              
                    </v-row>
                    </v-card>
                  </v-container>

                </v-card-text>

                <v-card-title>2. Design</v-card-title>
                <v-card-text>

                  <!-- Container Design *********************************************************************************************** -->
                  <v-container>
                    <v-card light>
                    <v-row justify="center">
                      <v-col cols="12" md="8" lg="8" xl="8">         
                    
                        <v-card-title>Gestalte deine Webseite - oder lass sie dir gestalten</v-card-title>
                        <v-card-text>
                          <Content slot-key="design" />
                        </v-card-text>
                        
                      </v-col>

                      <v-col cols="12" md="4" lg="4" xl="4">
                        <v-card-text align="center"><v-img :src="require('../img/entwicklung/un_design.png')" max-width="300px"></v-img></v-card-text> 
                      </v-col>
              
                    </v-row>
                    </v-card>
                  </v-container>

                </v-card-text>

                <v-card-title>3. Entwicklung</v-card-title>
                <v-card-text>

                  <!-- Container Entwicklung *********************************************************************************************** -->
                  <v-container>
                    <v-card light>
                    <v-row justify="center">
                      <v-col cols="12" md="8" lg="8" xl="8">         
                    
                        <v-card-title>Ich bin dann mal im Keller</v-card-title>
                        <v-card-text>
                          <Content slot-key="entwicklung" />
                        </v-card-text>
                        
                      </v-col>

                      <v-col cols="12" md="4" lg="4" xl="4">
                        <v-card-text align="center"><v-img :src="require('../img/entwicklung/un_entwicklung.png')" max-width="300px"></v-img></v-card-text> 
                      </v-col>
              
                    </v-row>
                    </v-card>
                  </v-container>

                </v-card-text>

                <v-card-title>4. Test</v-card-title>
                <v-card-text>

                  <!-- Container Testen *********************************************************************************************** -->
                  <v-container>
                    <v-card light>
                    <v-row justify="center">
                      <v-col cols="12" md="8" lg="8" xl="8">         
                    
                        <v-card-title>testen, verbessern...</v-card-title>
                        <v-card-text>
                          <Content slot-key="test" />
                        </v-card-text>
                        
                      </v-col>

                      <v-col cols="12" md="4" lg="4" xl="4">
                        <v-card-text align="center"><v-img :src="require('../img/entwicklung/un_test.png')" max-width="300px"></v-img></v-card-text> 
                      </v-col>
              
                    </v-row>
                    </v-card>
                  </v-container>

                </v-card-text>                    
                
                <v-card-title>5. Veröffentlichung</v-card-title>
                <v-card-text>

                  <!-- Container Release *********************************************************************************************** -->
                  <v-container>
                    <v-card light>
                    <v-row justify="center">
                      <v-col cols="12" md="8" lg="8" xl="8">         
                    
                        <v-card-title>Wir gehen live</v-card-title>
                        <v-card-text>
                          <Content slot-key="release" />
                        </v-card-text>
                        
                      </v-col>

                      <v-col cols="12" md="4" lg="4" xl="4">
                        <v-card-text align="center"><v-img :src="require('../img/entwicklung/un_release.png')" max-width="300px"></v-img></v-card-text>
                      </v-col>
              
                    </v-row>
                    </v-card>
                  </v-container>

                </v-card-text>   


            </v-card>
              
          </v-col>
        </v-row>

        <!-- Container Release *********************************************************************************************** -->
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10" lg="8" xl="8">
              <v-alert
              border="left"
              colored-border
              type="info"
              elevation="2"
              >
                <Content slot-key="info" /> 
              </v-alert>
            </v-col>
          </v-row>
        </v-container>

      </v-container>

    </v-container>

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