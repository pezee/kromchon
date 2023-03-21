<template>
    <v-container fluid >
        <v-toolbar image="https://www1.rid.go.th/_data/images/top_banner/121RID.png" height="115" color="white"></v-toolbar>
        <v-row align="center" justify="center" class="mt-15 pt-1">
            <v-col align="center">
                <v-card to="/home" elevation="0">
                <v-img src="@/assets/login.jpg" width="950"></v-img>
            </v-card>
            </v-col>
        </v-row>
     
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
    name: "LoginView",
    components: {

}

}
</script>

<style scoped>

</style>