<template>
    <v-app>
        <v-app-bar
        elevation="10"
        app>
        <v-app-bar-nav-icon class="mx-14">
            <v-img src="/images/wcw.png" contain position="center" height="40px" />
        </v-app-bar-nav-icon>
        <v-spacer />
        <v-icon class="logoutIcon" color="#FF374F">
            mdi-exit-to-app
        </v-icon>
        </v-app-bar>
        <Nuxt />
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.logoutIcon {
    font-size:25px;
}
</style>