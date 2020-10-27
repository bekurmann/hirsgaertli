<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="10" lg="10" xl="10" >

                <v-card>
                    <v-container class="pa-5">
                        <v-row>
                            <v-col>
                                <v-container>
                                    <PostMeta
                                    :title="$frontmatter.title"
                                    :description="$frontmatter.description"
                                    :author="$frontmatter.author"
                                    :tags="$frontmatter.tags"
                                    :date="$frontmatter.date"
                                    />
                                    <Content />
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-col>
        </v-row>  
    </v-container>  
</template>