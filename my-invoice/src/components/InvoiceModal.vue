<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="fixed top-0 left-0 flex flex-col w-full h-screen lg:left-16"
  >
    <form
      @submit.prevent="submitForm"
      class="relative w-full max-w-screen-md p-10 overflow-scroll text-white shadow-xl  otherbg"
    >
      <!-- <Loading v-show="loading" /> -->
      <h1 v-if="!editInvoice" class="mb-6 text-2xl font-semibold text-white">
        New Invoice
      </h1>
      <h1 v-else class="mb-10 text-2xl font-bold text-white">Edit Invoice</h1>

      <!-- Bill From -->
      <div class="flex flex-col bill-from">
        <h4 class="mb-3 text-sm font-semibold text-purple-500">Bill From</h4>
        <div class="flex flex-col input">
          <label for="billerStreetAddress" class="my-2 text-xs text-white"
            >Street Address</label
          >
          <input
            required
            type="text"
            id="billerStreetAddress"
            class="p-1 lightotherbg"
            v-model="billerStreetAddress"
          />
        </div>
        <div class="flex mt-4 location-details">
          <div class="flex flex-col mr-3 input">
            <label for="billerCity" class="my-2 text-xs text-white">City</label>
            <input
              required
              type="text"
              id="billerCity"
              class="p-1 lightotherbg"
              v-model="billerCity"
            />
          </div>
          <div class="flex flex-col mr-3 input">
            <label for="billerZipCode" class="my-2 text-xs text-white"
              >Zip Code</label
            >
            <input
              required
              class="p-1 lightotherbg"
              type="text"
              id="billerZipCode"
              v-model="billerZipCode"
            />
          </div>
          <div class="flex flex-col mr-3 input">
            <label for="billerCountry" class="my-2 text-xs text-white"
              >Country</label
            >
            <input
              required
              type="text"
              class="p-1 lightotherbg"
              id="billerCountry"
              v-model="billerCountry"
            />
          </div>
        </div>
      </div>

      <!-- Bill To -->
      <div class="flex flex-col mt-4 bill-to">
        <h4 class="mb-3 text-sm font-semibold text-purple-500">Bill To</h4>
        <div class="flex flex-col input">
          <label for="clientName" class="my-2 text-xs text-white"
            >Client's Name</label
          >
          <input
            required
            type="text"
            id="clientName"
            class="p-1 lightotherbg"
            v-model="clientName"
          />
        </div>
        <div class="flex flex-col input">
          <label for="clientEmail" class="my-2 text-xs text-white"
            >Client's Email</label
          >
          <input
            required
            type="text"
            class="p-1 lightotherbg"
            id="clientEmail"
            v-model="clientEmail"
          />
        </div>
        <div class="flex flex-col input">
          <label for="clientStreetAddress" class="my-2 text-xs text-white"
            >Street Address</label
          >
          <input
            required
            type="text"
            class="p-1 lightotherbg"
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>
        <div class="flex location-details">
          <div class="flex flex-col mr-3 input">
            <label for="clientCity" class="my-2 text-xs text-white">City</label>
            <input
              required
              class="p-1 lightotherbg"
              type="text"
              id="clientCity"
              v-model="clientCity"
            />
          </div>
          <div class="flex flex-col mr-3 input">
            <label for="clientZipCode" class="my-2 text-xs text-white"
              >Zip Code</label
            >
            <input
              required
              type="text"
              class="p-1 lightotherbg"
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>
          <div class="flex flex-col mr-3 input">
            <label for="clientCountry" class="my-2 text-xs text-white"
              >Country</label
            >
            <input
              required
              type="text"
              id="clientCountry"
              class="p-1 lightotherbg"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="flex flex-col invoice-work">
        <div class="flex payment">
          <div class="flex flex-col mr-3 input">
            <label for="invoiceDate" class="my-2 text-xs text-white"
              >Invoice Date</label
            >
            <input
              disabled
              type="text"
              id="invoiceDate"
              class="p-1 cursor-not-allowed lightotherbg"
              v-model="invoiceDate"
            />
          </div>
          <div class="flex flex-col input">
            <label for="paymentDueDate" class="my-2 text-xs text-white"
              >Payment Due</label
            >
            <input
              disabled
              type="text"
              class="p-1 cursor-not-allowed lightotherbg"
              id="paymentDueDate"
              v-model="paymentDueDate"
            />
          </div>
        </div>
        <div class="flex flex-col input">
          <label for="paymentTerms" class="my-2 text-xs text-white"
            >Payment Terms</label
          >
          <select
            required
            type="text"
            id="paymentTerms"
            class="p-1 lightotherbg"
            v-model="paymentTerms"
          >
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
        <div class="flex flex-col input">
          <label for="productDescription" class="my-2 text-xs text-white"
            >Product Description</label
          >
          <input
            required
            class="p-1 lightotherbg"
            type="text"
            id="productDescription"
            v-model="productDescription"
          />
        </div>
        <div class="mt-8">
          <h3 class="text-xl font-bold text-gray-500">Item List</h3>
          <table class="block p-0 m-0 mt-5 table-auto item-list">
            <tr class="flex justify-between mb-4 text-sm table-heading">
              <th class="item-name">Item Name</th>
              <th class="qty">Qty</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr
              class="flex my-1 table-items"
              v-for="(item, index) in invoiceItemList"
              :key="index"
            >
              <td class="mr-3 item-name">
                <input
                  type="text"
                  v-model="item.itemName"
                  class="p-1 lightotherbg"
                />
              </td>
              <td class="mr-3 qty">
                <input
                  type="number"
                  v-model="item.qty"
                  class="p-1 lightotherbg"
                />
              </td>
              <td class="mr-3 price">
                <input
                  type="number"
                  v-model="item.price"
                  class="p-1 lightotherbg"
                />
              </td>
              <td class="flex mr-3 total">
                ${{ (item.total = item.qty * item.price) }}
              </td>

              <span
                @click="deleteInvoiceItem(item.id)"
                class="mt-1 cursor-pointer"
                ><Icon icon="ant-design:delete-filled"
              /></span>
            </tr>
          </table>

          <button
            @click="addNewInvoiceItem"
            type="button"
            class="flex justify-center w-full p-2 mt-8 text-sm rounded-full cursor-pointer  lightotherbg button w-100"
          >
            <span class="mt-1 mr-1 text-purple-600"
              ><Icon icon="akar-icons:plus"
            /></span>
            Add New Item
          </button>
        </div>
      </div>

      <!-- Save/Exit -->
      <div class="flex justify-between mt-8">
        <div class="left">
          <button
            type="button"
            @click="closeInvoice"
            class="px-4 py-2 text-sm bg-red-400 rounded-full cursor-pointer red"
          >
            Cancel
          </button>
        </div>
        <div class="flex right">
          <button
            v-if="!editInvoice"
            type="submit"
            @click="saveDraft"
            class="px-4 py-2 mr-4 text-sm rounded-full cursor-pointer  lightotherbg"
          >
            Save Draft
          </button>
          <button
            v-if="!editInvoice"
            :disabled="loading"
            type="submit"
            @click="publishInvoice"
            class="flex p-2 text-sm bg-purple-500 rounded-full"
          >
            <span v-if="loading">
              <Icon
                class="w-5 h-5 mr-3 animate-spin"
                icon="fluent:spinner-ios-20-filled"
              />
            </span>
            Create Invoice
          </button>
          <button
            v-if="editInvoice"
            type="sumbit"
            class="flex p-2 text-sm bg-purple-500 rounded-full"
          >
            Update Invoice
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db, firebaseApp } from "../firebase/firebaseinit";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { Icon } from "@iconify/vue";
import { mapMutations, mapState, mapActions } from "vuex";
import { uid } from "uid";
export default {
  name: "invoiceModal",
  components: {
    Icon,
  },
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      docId: null,
      loading: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
      // editInvoice: false,
    };
  },

  created() {
    if (!this.editInvoice) {
      this.invoiceDateUnix = Date.now();

      this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
        "en-us",
        this.dateOptions
      );
    }

    if (this.editInvoice) {
      const currentInvoice = this.currentInvoiceArray[0];
      this.docId = currentInvoice.docId;
      this.billerStreetAddress = currentInvoice.billerStreetAddress;
      this.billerCity = currentInvoice.billerCity;
      this.billerZipCode = currentInvoice.billerZipCode;
      this.billerCountry = currentInvoice.billerCountry;
      this.clientName = currentInvoice.clientName;
      this.clientEmail = currentInvoice.clientEmail;
      this.clientStreetAddress = currentInvoice.clientStreetAddress;
      this.clientCity = currentInvoice.clientCity;
      this.clientZipCode = currentInvoice.clientZipCode;
      this.clientCountry = currentInvoice.clientCountry;
      this.invoiceDateUnix = currentInvoice.invoiceDateUnix;
      this.invoiceDate = currentInvoice.invoiceDate;
      this.paymentTerms = currentInvoice.paymentTerms;
      this.paymentDueDateUnix = currentInvoice.paymentDueDateUnix;
      this.paymentDueDate = currentInvoice.paymentDueDate;
      this.productDescription = currentInvoice.productDescription;
      this.invoicePending = currentInvoice.invoicePending;
      this.invoiceDraft = currentInvoice.invoiceDraft;
      this.invoiceItemList = currentInvoice.invoiceItemList;
      this.invoiceTotal = currentInvoice.invoiceTotal;
    }
  },

  computed: {
    ...mapState(["editInvoice", "currentInvoiceArray"]),
  },

  methods: {
    ...mapMutations(["TOGGLE_INVOICE", "TOGGLE_MODAL", "TOGGLE_EDIT_INVOICE"]),

    ...mapActions(["UPDATE_INVOICE"]),
    closeInvoice() {
      this.TOGGLE_INVOICE();
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE();
      }
    },

    addNewInvoiceItem() {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        qty: "",
        price: 0,
        total: 0,
      });
    },

    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(
        (item) => item.id !== id
      );
    },

    calInvoiceTotal() {
      this.invoiceTotal = 0;

      this.invoiceItemList.forEach((item) => (this.invoiceTotal += item.total));
    },

    publishInvoice(id) {
      this.invoicePending = true;
    },

    async uploadInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert("Please ensure you fill out work items!");
        return;
      }

      this.loading = true;

      this.calInvoiceTotal();

      const id = uid(6);
      await setDoc(
        doc(db, "invoices", id),
        {
          invoiceId: uid(6),
          billerStreetAddress: this.billerStreetAddress,
          billerCity: this.billerCity,
          billerZipCode: this.billerZipCode,
          billerCountry: this.billerCountry,
          clientName: this.clientName,
          clientEmail: this.clientEmail,
          clientStreetAddress: this.clientStreetAddress,
          clientCity: this.clientCity,
          clientZipCode: this.clientZipCode,
          clientCountry: this.clientCountry,
          invoiceDate: this.invoiceDate,
          invoiceDateUnix: this.invoiceDateUnix,
          paymentTerms: this.paymentTerms,
          paymentDueDate: this.paymentDueDate,
          paymentDueDateUnix: this.paymentDueDateUnix,
          productDescription: this.productDescription,
          invoiceItemList: this.invoiceItemList,
          invoiceTotal: this.invoiceTotal,
          invoicePending: this.invoicePending,
          invoiceDraft: this.invoiceDraft,
          invoicePaid: null,
        },
        { capital: true },
        { merge: true }
      );

      this.loading = false;
      this.TOGGLE_INVOICE();
    },

    async updateInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert("Please ensure you fill out work items!");
        return;
      }

      this.loading = true;

      this.calInvoiceTotal();

      const toUpdate = doc(db, "invoices", this.docId);

      await updateDoc(
        toUpdate,
        {
          billerStreetAddress: this.billerStreetAddress,
          billerCity: this.billerCity,
          billerZipCode: this.billerZipCode,
          billerCountry: this.billerCountry,
          clientName: this.clientName,
          clientEmail: this.clientEmail,
          clientStreetAddress: this.clientStreetAddress,
          clientCity: this.clientCity,
          clientZipCode: this.clientZipCode,
          clientCountry: this.clientCountry,
          invoiceDate: this.invoiceDate,
          invoiceDateUnix: this.invoiceDateUnix,
          paymentTerms: this.paymentTerms,
          paymentDueDate: this.paymentDueDate,
          paymentDueDateUnix: this.paymentDueDateUnix,
          productDescription: this.productDescription,
          invoiceItemList: this.invoiceItemList,
          invoiceTotal: this.invoiceTotal,
          invoicePending: this.invoicePending,
          invoiceDraft: this.invoiceDraft,
          invoicePaid: null,
        },
        { capital: true },
        { merge: true }
      );

      this.loading = false;
      this.TOGGLE_INVOICE();
    },

    submitForm() {
      if (this.editInvoice) {
        this.updateInvoice();
        return;
      }
      this.uploadInvoice();
    },

    saveDraft() {
      this.invoiceDraft = true;
    },

    checkClick(e) {
      console.log("e.target is", e.target);

      console.log("this.$refs is ", this.$refs.invoiceWrap);
      if (e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_MODAL();
      }
    },
  },

  watch: {
    paymentTerms() {
      const futureDate = new Date();

      this.paymentDueDateUnix = futureDate.setDate(
        futureDate.getDate() + parseInt(this.paymentTerms)
      );

      this.paymentDueDate = new Date(
        this.paymentDueDateUnix
      ).toLocaleDateString("en-us", this.dateOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>