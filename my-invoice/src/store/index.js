import { createStore } from 'vuex';
import { db } from '../firebase/firebaseinit';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

export default createStore({
  state: {
    invoiceModal: null,
    modalActive: null,
    invoiceData: [],
    invoicesLoaded: null,
    currentInvoiceArray: null,
    editInvoice: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state) {
      state.invoicesLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload) {
      state.currentInvoiceArray = state.invoiceData.filter((invoice) => {
        return invoice.invoiceId === payload;
      });
    },
    TOGGLE_EDIT_INVOICE(state, payload) {
      state.editInvoice = !state.editInvoice;
    },
    DELETE_INVOICE(state, payload) {
      state.invoiceData = state.invoiceData.filter(
        (invoice) => invoice.docId !== payload
      );
    },
  },
  actions: {
    async GET_INVOICES({ commit, state }) {
      const getData = collection(db, 'invoices');

      const results = await getDocs(getData);

      console.log(results);

      results.forEach((doc) => {
        const data = {
          docId: doc.id,
          invoiceId: doc.data().invoiceId,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerCity,
          billerZipCode: doc.data().billerZipCode,
          billerCountry: doc.data().billerCountry,
          clientName: doc.data().clientName,
          clientEmail: doc.data().clientEmail,
          clientStreetAddress: doc.data().clientStreetAddress,
          clientCity: doc.data().clientCity,
          clientZipCode: doc.data().clientZipCode,
          clientCountry: doc.data().clientCountry,
          invoiceDateUnix: doc.data().invoiceDateUnix,
          invoiceDate: doc.data().invoiceDate,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDateUnix: doc.data().paymentDueDateUnix,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoicePaid: doc.data().invoicePaid,
        };
        commit('SET_INVOICE_DATA', data);
        console.log(data);
      });

      commit('INVOICES_LOADED');
      return;
    },
    async UPDATE_INVOICE({ commit, dispatch }, { docId, routeId }) {
      commit('DELETE_INVOICE', docId);

      await dispatch('GET_INVOICES');
      commit('TOGGLE_INVOICE');
      commit('TOGGLE_EDIT_INVOICE');
      commit('SET_CURRENT_INVOICE', routeId);
    },
  },
  modules: {},
});
