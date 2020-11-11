<template>

  <v-container>
    
    <BaseListLayout />

    <v-row justify="center">
        <v-col cols="12" md="10" lg="10" xl="10" align="center">
            <v-btn
            class="mx-2"
            fab
            dark
            color="blue-grey darken-4"
            v-if="$pagination.hasPrev"
            :to="$pagination.prevLink"
            >
                <v-icon dark>
                    mdi-chevron-left
                </v-icon>
            </v-btn>
            <v-btn
            class="mx-2"
            fab
            dark
            color="blue-grey darken-4"
            v-if="$pagination.hasNext"
            :to="$pagination.nextLink"
            >
                <v-icon dark>
                    mdi-chevron-right
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</v-container>

</template>
