<template>
  <div class="text-white">
    <div class="">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold">Invoices</h1>
          <span>There are 4 total invoices</span>
        </div>
        <div class="flex justify-between">
          <div @click="toggleFilter" class="flex flex-col" ref="filter">
            <div class="flex">
              <span class="text-sm">Filter by status</span>

              <span class="mt-1">
                <Icon
                  icon="akar-icons:arrow-down"
                  color="white"
                  width="14"
                  height="14"
              /></span>
            </div>

            <ul v-show="filterMenu" class="text-xs mt-3 bg-indigo-700">
              <li class="my-1 hover:bg-sky-700 p-2">Draft</li>
              <li class="my-1 hover:bg-sky-700 p-2">Pending</li>
              <li class="my-1 hover:bg-sky-700 p-2">Paid</li>
              <li class="my-1 hover:bg-sky-700 p-2">Clear Filter</li>
            </ul>
          </div>

          <div class="ml-4">
            <div @click="newInvoice" class="flex">
              <div class="flex">
                <span class="mt-1">
                  <Icon
                    icon="akar-icons:plus"
                    color="white"
                    width="14"
                    height="14"
                /></span>
                <span class="text-sm">New Invoice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },

  data() {
    return {
      filterMenu: true,
    };
  },

  mounted() {
    console.log("object");
  },
};
</script>

<style>
</style>