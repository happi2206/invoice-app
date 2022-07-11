<template>
  <div class="container px-5">
    <div class="flex">
      <div class="flex flex-col">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="flex">
        <div @click="toggleFilter" class="flex" ref="filter">
          <span>Filter by status</span>
          <Icon icon="akar-icons:arrow-down" color="white" />

          <ul v-show="filterMenu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>

        <div>
          <div @click="newInvoice" class="flex">
            <div class="flex">
              <Icon icon="akar-icons:plus" color="white" />
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

  mounted() {
    console.log("object");
  },
};
</script>

<style>
</style>