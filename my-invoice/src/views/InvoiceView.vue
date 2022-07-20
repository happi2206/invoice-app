<template>
  <div v-if="currentInvoice" class="container text-white">
    <router-link class="flex text-white" :to="{ name: 'Home' }">
      <span class="mt-1 mr-3">
        <Icon icon="akar-icons:arrow-left" width="15" height="15" color="white"
      /></span>

      Go back</router-link
    >

    <div class="p-8 mt-10 bg-indigo-900 rounded-lg">
      <div class="flex justify-between align-center">
        <div class="flex mr-5">
          <span class="mt-1 mr-4"> Status:</span>
          <span class="" v-if="currentInvoice.invoicePaid">Paid</span>
          <span class="" v-if="currentInvoice.invoiceDraft">Draft</span>
          <span
            class="p-2 text-sm font-bold text-yellow-200 bg-purple-500 rounded-md "
            v-if="currentInvoice.invoicePending"
            >Pending</span
          >
        </div>

        <div class="flex">
          <button
            @click="toggleEditInvoice(currentInvoice.docId)"
            class="p-2 mr-3 text-sm font-bold bg-purple-500 rounded-lg"
          >
            Edit
          </button>
          <button
            @click="delete currentInvoice.docId"
            class="p-2 mr-3 text-sm font-bold text-white bg-red-400 rounded-lg"
          >
            Delete
          </button>
          <button
            v-if="currentInvoice.invoicePending"
            @click="updateStatusToPaid(currentInvoice.docId)"
            class="p-2 mr-3 text-sm font-bold text-white bg-green-400 rounded-lg "
          >
            Mark as Paid
          </button>
          <button
            v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
            @click="updateStatusToPending(currentInvoice.docId)"
            class="p-2 text-sm font-bold text-white bg-orange-400 rounded-lg"
          >
            Mark as Pending
          </button>
        </div>
      </div>
    </div>
    <div class="p-8 mt-5 bg-indigo-900 rounded-lg">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <p class="text-2xl font-bold">
              <span>#</span>
              {{ currentInvoice.invoiceId }}
            </p>
            <p class="text-sm uppercase">
              {{ currentInvoice.productDescription }}
            </p>
          </div>

          <div class="flex flex-col text-sm text-right">
            <p>
              {{ currentInvoice.billerStreetAddress }}
            </p>
            <p>
              {{ currentInvoice.billerCity }}
            </p>
            <p>
              {{ currentInvoice.billerZipCode }}
            </p>
            <p>
              {{ currentInvoice.billerCountry }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8 middle">
        <div class="flex flex-col">
          <h4 class="font-bold text-gray-400">Invoice Date</h4>

          <div class="flex flex-col">
            <p class="text-sm">
              {{ currentInvoice.invoiceDate }}
            </p>
            <h4 class="mt-4 font-bold text-gray-400">Payment Date</h4>
            <p class="text-sm">
              {{ currentInvoice.paymentDueDate }}
            </p>
          </div>
        </div>
        <div class="">
          <h4 class="font-bold text-gray-400">Bill To</h4>
          <div class="text-sm">
            <p>{{ currentInvoice.clientName }}</p>
            <p>{{ currentInvoice.clientStreetAddress }}</p>
            <p>{{ currentInvoice.clientCity }}</p>
            <p>{{ currentInvoice.clientZipCode }}</p>
            <p>{{ currentInvoice.clientCountry }}</p>
          </div>
        </div>
        <div class="">
          <h4 class="font-bold text-gray-400">Sent To</h4>
          <p class="text-sm">{{ currentInvoice.clientEmail }}</p>
        </div>
      </div>
      <div class="flex flex-col pt-5 mt-10 bg-indigo-700 rounded-lg">
        <div class="px-5 billing-items">
          <div class="flex">
            <p class="w-2/4">Item Name</p>
            <p class="w-56">QTY</p>
            <p class="w-56">Price</p>
            <p class="w-56">Total</p>
          </div>
          <div
            v-for="(item, index) in currentInvoice.invoiceItemList"
            :key="index"
            class="flex"
          >
            <p class="w-2/4">{{ item.itemName }}</p>
            <p class="w-56">{{ item.qty }}</p>
            <p class="w-56">{{ item.price }}</p>
            <p class="w-56">{{ item.total }}</p>
          </div>
        </div>
        <div
          class="flex justify-between px-5 py-5 mt-5 bg-gray-800 rounded-b-lg  total"
        >
          <p class="">Amount Due</p>
          <p class="">{{ currentInvoice.invoiceTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Icon } from "@iconify/vue";
import { threadId } from "worker_threads";
export default {
  name: "invoiceView",
  data() {
    return {
      currentInvoice: null,
    };
  },
  components: {
    Icon,
  },
  created() {
    this.getCurrentInvoice();
  },
  methods: {
    ...mapMutations([
      "SET_CURRENT_INVOICE",
      "TOGGLE_EDIT_INVOICE",
      "TOGGLE_INVOICE",
    ]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },
    toggleEditInvoice() {
      this.TOGGLE_EDIT_INVOICE();
      this.TOGGLE_INVOICE();
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray", "editInvoice"]),
  },

  watch: {
    editInvoice() {
      if (!this.editInvoice) {
        this.currentInvoice = this.currentInvoiceArray[0];
      }
    },
  },
};
</script>

<style>
</style>