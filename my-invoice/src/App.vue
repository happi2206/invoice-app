

<template>
  <div v-if="invoicesLoaded">
    <div class="flex flex-row">
      <Nav />
      <div class="container py-32 mx-auto md:px-32 xl:px-40">
        <Modal v-if="modalActive" />
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal" />
        </transition>

        <router-view />
      </div>
    </div>
  </div>
</template>
<script >
import { mapState, mapActions } from "vuex";

import Nav from "./components/Nav.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import Modal from "./components/Modal.vue";

export default {
  components: { Nav, InvoiceModal, Modal },
  computed: {
    ...mapState(["invoiceModal", "modalActive", "invoicesLoaded"]),
  },

  created() {
    this.GET_INVOICES();
  },

  methods: {
    ...mapActions(["GET_INVOICES"]),
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
