<template>

<v-container fluid transition="fade-in" style="background-image: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 50%, rgba(38,50,56,1) 100%);">

    <v-container>

        <!-- Container Header full-width ************************************************************************************** -->
        <v-row class="mt-12" data-aos="fade-in">
            <v-col cols="12" lg="12" xl="12">

            <p class="text-h2" align="center">Meine Hosting Angebote 🚀</p>

            </v-col>
        </v-row>  

        <!-- Angebote ***************************************************************************************-->
        <v-row justify="center">

            <!-- Wordpress ***************************************************************************************-->
            <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch">
                <v-card data-aos="fade-in">
                    <v-img :src="require('../img/hosting/wordpress_page.png')" gradient="to top right, rgba(255,0,0,0) 0%, rgba(38,50,56,0.0) 0%" max-height="200px" position="top"></v-img>

                    <v-list-item three-line>
                    <v-list-item-content>
                        <span class="headline mb-1">Wordpress ab 60.- CHF/Jahr</span>
                        <span class="subtitle-1">Das beliebte CMS</span> 

                    </v-list-item-content>

                    <v-list-item-avatar tile size="50">
                        <v-img :src="require('../img/hosting/wordpress.svg')"></v-img>
                    </v-list-item-avatar>
                    </v-list-item>

                    <v-card-text>
                        <v-row>
                            <v-col cols="11" class="mx-auto">
                            <v-expansion-panels hover>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Mehr erfahren...
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <Content slot-key="wordpress" />
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            </v-col>
                        </v-row>
                </v-card-text>
                </v-card>
            </v-col>

            <!-- Elementor ***************************************************************************************-->
            <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch">
                <v-card data-aos="fade-in">
                    <v-img :src="require('../img/hosting/elementor_page.jpg')" gradient="to top right, rgba(255,0,0,0) 0%, rgba(38,50,56,0.0) 0%" max-height="200px" position="top"></v-img>

                        <v-list-item three-line>
                        <v-list-item-content> 
                            <span class="headline mb-1">Elementor ab 120.- CHF/Jahr</span>
                            <span class="subtitle-1">Der PageBuilder für Wordpress</span>                        </v-list-item-content>
                        <v-list-item-avatar tile size="50">
                            <v-img :src="require('../img/hosting/elementor.png')"></v-img>
                        </v-list-item-avatar>
                        </v-list-item>

                    <v-card-text>
                        <v-row>
                            <v-col cols="11" class="mx-auto">
                            <v-expansion-panels hover>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Mehr erfahren...
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <Content slot-key="elementor" />
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            </v-col>
                        </v-row>
                </v-card-text>
                </v-card>
            </v-col>

        </v-row>
        <v-row justify="center">

            <!-- Ghost ***************************************************************************************-->
            <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch">
                <v-card data-aos="fade-in">
                    <v-img :src="require('../img/hosting/ghost_page.png')" gradient="to top right, rgba(255,0,0,0) 0%, rgba(38,50,56,0.0) 0%" max-height="200px" position="top"></v-img>

                        <v-list-item three-line>
                        <v-list-item-content>   
                            <span class="headline mb-1">Ghost ab 250.- CHF/Jahr</span>
                            <span class="subtitle-1">Die Wordpress Alternative</span>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="50">
                            <v-img :src="require('../img/hosting/ghost.png')"></v-img>
                        </v-list-item-avatar>
                        </v-list-item>

                    <v-card-text>
                        <v-row>
                            <v-col cols="11" class="mx-auto">
                            <v-expansion-panels hover>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Mehr erfahren...
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <Content slot-key="ghost" />
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            </v-col>
                        </v-row>
                </v-card-text>
                </v-card>
            </v-col>

            <!-- Nextcloud ***************************************************************************************-->
            <v-col cols="12" md="5" lg="4" xl="4" class="d-flex child-flex align-stretch">
                <v-card data-aos="fade-in"> 
                    <v-img :src="require('../img/hosting/nextcloud_page.png')" gradient="to top right, rgba(255,0,0,0) 0%, rgba(38,50,56,0.0) 0%" max-height="200px" position="top"></v-img>

                        <v-list-item three-line>
                        <v-list-item-content> 
                            <span class="headline mb-1">Nextcloud ab 350.- CHF/Jahr</span>
                            <span class="subtitle-1">Deine eigene Cloud</span>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="50">
                            <v-img :src="require('../img/hosting/nextcloud.png')"></v-img>
                        </v-list-item-avatar>
                        </v-list-item>

                    <v-card-text>
                        <v-row>
                            <v-col cols="11" class="mx-auto">
                            <v-expansion-panels hover>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Mehr erfahren...
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <Content slot-key="nextcloud" />
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            </v-col>
                        </v-row>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Info ***************************************************************************************-->
        <v-row justify="center" >
        <v-col cols="12" md="10" lg="8" xl="8" data-aos="fade-in">
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

        <!--- So funktioniert's ******************************************************** --->
        <v-row justify="center" >
        <v-col cols="12" md="10" lg="8" xl="8">
            <v-card color="blue-grey darken-4" dark data-aos="fade-in">
                <v-card-title>So funktioniert's</v-card-title>
                <v-card-text>

                    <v-timeline class="text-caption text-sm-body-1">

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/joker.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Du nimmst mit mir Kontakt auf, stellst dich vor und fragst, wie es mir geht.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                Hallo, Benjamin. Hier Joker, wie läufts?
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/me_small.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Ich bin freundlich und freue mich.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                <span class="text-decoration-line-through">Ah, lass mich in Ruhe, ich habe keine Zeit.</span>
                                <span><br>Super, wie kann ich dir helfen?</span>
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/joker.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Du sagst mir, für was du dich interessierst. Wir besprechen das kurz, vielleicht nenne ich dir Alternativen oder mache Vorschläge.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                Ich will alles und zwar subito!
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/me_small.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Ich schicke dir ein Angebot per e-Mail.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                Check deine e-Mails.
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/joker.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Du schaust dir das Angebot an und bestätigst mir das weitere Vorgehen.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                Hey, das ist doch schön. Endlich jemand, der mich versteht. Das ist ok so.
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src="require('../img/hosting/me_small.jpg')">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Ich setze alles auf und schicke dir die nötigen Zugänge.</span>
                        </template>
                        <v-card class="elevation-2" color="white" light>
                            <v-card-text class="text-caption text-sm-body-1">
                                Check deine e-Mail und geniesse deine sehr persönliche Hosting Dienstleistung.
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>

                    </v-timeline>

                </v-card-text>
            </v-card>
        </v-col>
        </v-row>

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