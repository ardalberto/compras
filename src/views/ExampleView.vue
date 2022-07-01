<script setup lang="ts">
import ExampleComponent from "@/components/ExampleComponent.vue";
</script>

<template>
  <v-card>
    <v-card-title> This is an example view </v-card-title>
    <v-card-text>
      <ExampleComponent />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "ExampleView",
};
</script>
