

<template>
  <div>
    <div class="flex flex-row">
      <Nav />
      <div class="container py-32 mx-auto md:px-32 xl:px-72">
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal" />
        </transition>

        <router-view />
      </div>
    </div>
  </div>
</template>
<script >
import { mapState } from "vuex";
import Nav from "./components/Nav.vue";
import InvoiceModal from "./components/InvoiceModal.vue";

export default {
  components: { Nav, InvoiceModal },
  computed: {
    ...mapState(["invoiceModal"]),
  },
};
</script>

<style lang="scss" scoped>
.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}
.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}
</style>
