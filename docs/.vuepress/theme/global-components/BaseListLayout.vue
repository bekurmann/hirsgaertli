<template>

  <v-container>

    <v-row justify="center">
        <v-col cols="12" md="10" lg="10" xl="10" > 

            <v-card 
              v-for="page in $pagination.pages"
              :to="page.path"
              :key="page.key">
                <v-img height="200" :src="page.frontmatter.img" class="blue-grey darken-4 hidden-md-and-up"></v-img>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                      <v-card-title class="headline">{{ page.title }}</v-card-title>
                      <v-card-subtitle>von {{ page.frontmatter.author }}, {{ formateDate(page.frontmatter.date) }}</v-card-subtitle>
                      <v-card-text>{{ page.frontmatter.description }}</v-card-text>
                      <v-card-actions><v-btn color="blue-grey darken-4" dark :to="page.path">Mehr lesen</v-btn></v-card-actions>
                  </div>
                  <v-img class="ma-3 hidden-sm-and-down" max-width="350" :src="page.frontmatter.img"></v-img>
                </div>
            </v-card>   

        </v-col>
    </v-row> 

  </v-container>
  
</template>
<script>
import moment from "moment"

export default {
  methods: {
    formateDate(date) {
      return moment(date).format("L")
    },
  },
}
</script>