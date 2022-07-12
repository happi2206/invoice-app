

<template>
  <div>
    <div class="flex flex-row">
      <Nav />
      <div class="container py-32 mx-auto md:px-32 xl:px-72">
        <InvoiceModal />
        <router-view />
      </div>
    </div>
  </div>
</template>
<script >
import Nav from "./components/Nav.vue";
import InvoiceModal from "./components/InvoiceModal.vue";

export default {
  components: { Nav, InvoiceModal },
};
</script>
<style>
</style>
