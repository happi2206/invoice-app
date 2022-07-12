

<template>
  <div>
    <div class="flex flex-row">
      <Nav />
      <div class="container mx-auto px-80 py-32">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script >
import Nav from "./components/Nav.vue";

export default {
  components: { Nav },
};
</script>
<style>
</style>
