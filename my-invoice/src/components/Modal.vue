
<template>
  <div
    class="
      fixed
      flex
      justify-center
      -translate-x-1/2 -translate-y-1/2
      h-52
      w-72
      top-1/2
      left-1/2
      align-center
      z-[100]
    "
  >
    <div class="p-8 bg-indigo-800 modal-content rounded-2xl">
      <p class="font-bold text-center text-white">
        Are you sure you want to exit? Your changes will not be saved
      </p>

      <div class="flex justify-center mt-4">
        <button
          @click="closeModal"
          type="submit"
          class="p-2 mr-3 text-sm text-white bg-indigo-700 rounded"
        >
          Return
        </button>

        <button
          @click="closeInvoice"
          type="submit"
          class="p-2 mr-3 text-sm text-white bg-red-500 rounded"
        >
          Close Modal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "modal",

  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_INVOICE"]),
    closeModal() {
      this.TOGGLE_MODAL();
    },

    closeInvoice() {
      this.TOGGLE_INVOICE();
      this.TOGGLE_MODAL();
    },
  },
};
</script>

<style>
</style>