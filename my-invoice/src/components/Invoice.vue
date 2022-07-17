<template>
  <div class="mt">
    <router-link :to="{ name: 'Invoice' }"></router-link>
    <h2 class="text-xl text-white">{{ invoice.billerStreetAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>

<style>
</style>