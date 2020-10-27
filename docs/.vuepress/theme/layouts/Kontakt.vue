<template>
<v-container transition="fade-transition">

    <v-container data-aos="fade-in">

        <!-- Container Header full-width ************************************************************************************** -->
        <v-row class="mt-12">
            <v-col cols="12" lg="12" xl="12">

            <p class="text-h2" align="center">Kontakt 📬</p>

            </v-col>
        </v-row>  

        <!-- Kontakt ***************************************************************************************-->
        <v-row justify="center">
            <v-avatar size="30vh">
                <v-img :src="require('../img/kontakt/me_small.jpg')"></v-img>
            </v-avatar>
        </v-row>
        <v-row justify="center">
            <!-- Kontakt ***************************************************************************************-->
            <v-col cols="12" md="8" lg="6" xl="6" class="d-flex child-flex align-stretch">

                <v-card>
                    <v-row justify="center">
                    <v-col cols="12" md="6" lg="6" xl="6">
                        <v-card-text><Content slot-key="kontakt1" /></v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" lg="6" xl="6">
                        <v-card-text><Content slot-key="kontakt2" /></v-card-text>
                    </v-col>
                    </v-row>
                    

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