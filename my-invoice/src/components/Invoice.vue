<template>
  <div class="my-4">
    <router-link
      class="flex justify-between p-4 bg-purple-400 rounded-lg cursor-pointer  invoice"
      :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
    >
      <div class="flex justify-between align-center">
        <span class="flex-1 mr-3 text-sm whitespace-nowrap trackingnumber"
          >#{{ invoice.invoiceId }}</span
        ><span class="flex-1 mr-3 text-sm whitespace-nowrap duedate">{{
          invoice.paymentDueDate
        }}</span
        ><span class="flex-1 text-sm whitespace-nowrap person">{{
          invoice.clientName
        }}</span>
      </div>

      <div class="flex mr-5">
        <span class="mr-3 price">${{ invoice.invoiceTotal }}</span>
        <div
          class="duedate"
          :class="{
            paid: invoice.invoiceTotal,
            draft: invoice.invoiceDraft,
            pending: invoice.invoicePending,
          }"
        >
          <span class="" v-if="invoice.invoicePaid">Paid</span>
          <span class="" v-if="invoice.invoiceDraft">Draft</span>
          <span
            class="p-2 text-sm font-bold text-yellow-200 bg-purple-500 rounded-md "
            v-if="invoice.invoicePending"
            >Pending</span
          >
        </div>

        <div class="mt-1 ml-3 icon">
          <Icon icon="akar-icons:arrow-right" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "invoice",
  components: {
    Icon,
  },
  props: ["invoice"],
};
</script>

<style>
</style>