

<template>
  <div>
    <div class="flex flex-row">
      <Nav />
      <div class="flex md:flex-col flex-row">
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
