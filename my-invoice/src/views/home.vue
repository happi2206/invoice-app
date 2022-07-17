<template>
  <div class="text-white">
    <div class="">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold">Invoices</h1>
          <span>There are 4 total invoices</span>
        </div>
        <div class="flex justify-between cursor-pointer align-center">
          <div @click="toggleFilter" class="flex flex-col mt-2" ref="filter">
            <div class="flex">
              <span class="text-sm">Filter by status</span>

              <span class="mt-1 ml-1">
                <Icon
                  icon="akar-icons:chevron-down"
                  color="white"
                  width="14"
                  height="14"
              /></span>
            </div>

            <ul v-show="filterMenu" class="mt-3 text-xs bg-purple-500">
              <li class="p-2 my-1 hover:bg-purple-700">Draft</li>
              <li class="p-2 my-1 hover:bg-purple-700">Pending</li>
              <li class="p-2 my-1 hover:bg-purple-700">Paid</li>
              <li class="p-2 my-1 hover:bg-purple-700">Clear Filter</li>
            </ul>
          </div>

          <div class="ml-10">
            <div @click="newInvoice" class="flex">
              <button class="flex p-2 bg-purple-500 rounded-full">
                <span class="mt-1 bg-white rounded-full">
                  <Icon
                    icon="akar-icons:plus"
                    color="black"
                    width="12"
                    height="12"
                /></span>
                <span class="ml-2 text-sm">New Invoice</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <Invoice
          v-for="(invoice, index) in invoiceData"
          :invoice="invoice"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapMutations, mapState } from "vuex";
import Invoice from "../components/Invoice.vue";

export default {
  components: {
    Icon,
    Invoice,
  },

  data() {
    return {
      filterMenu: false,
    };
  },

  mounted() {
    console.log("object");
  },

  computed: {
    ...mapState(["invoiceData"]),
  },

  methods: {
    toggleFilter() {
      console.log("show filter");
      this.filterMenu = !this.filterMenu;
    },

    ...mapMutations(["TOGGLE_INVOICE"]),

    newInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
};
</script>

<style>
</style>