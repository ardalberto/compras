<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
  name: "App",
});
</script>
