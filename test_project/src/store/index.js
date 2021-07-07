import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: [],
        pageNumber: 0,
        size: 8,
        paginatedData: [],
        pageCount: 0,
        curDate: '',
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addPaymentsListData(state, data) {
            state.paymentsList.push(data)
        },
        setCategoriesList(state, payload) {
            state.categories = payload;
        },
        setNextPage(state) {
            state.pageNumber++;
            
        },
        setPrevPage(state) {
            state.pageNumber--;
        },
        setPage(state, i) {
            state.pageNumber = i - 1;
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getPaymentsListFullPrice: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.price, 0)
        },
        getCategoriesList: state => state.categories,
        getPageNumber: state => state.pageNumber,
        getPageCount: state => { 
            return Math.ceil(state.paymentsList.length / state.size);},
        getSize: state => state.size,
        getPaginatedData: state => {
            const start = state.pageNumber * state.size,
                    end =  start + state.size;
            return state.paymentsList.slice(start, end)
        },
        getCurDate: state => {
            let d = new Date();
            return state.curDate = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
        },
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        {
                            date: '12.05.2021',
                            category: 'Education',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Education',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Education',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Education',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Education',
                            price: 258,
                        },
                        {
                            date: '17.05.2021',
                            category: 'Education',
                            price: 369,
                        },
                        {
                            date: '18.05.2021',
                            category: 'Education',
                            price: 852,
                        },
                        {
                            date: '19.05.2021',
                            category: 'Education',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Education',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Education',
                            price: 753,
                        },
                        {
                            date: '12.05.2021',
                            category: 'Education',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Education',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Education',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Education',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Education',
                            price: 258,
                        },
                        {
                            date: '17.05.2021',
                            category: 'Education',
                            price: 369,
                        },
                        {
                            date: '18.05.2021',
                            category: 'Education',
                            price: 852,
                        },
                        {
                            date: '19.05.2021',
                            category: 'Education',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Education',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Education',
                            price: 753,
                        },{
                            date: '12.05.2021',
                            category: 'Education',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Education',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Education',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Education',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Education',
                            price: 258,
                        },
                        {
                            date: '17.05.2021',
                            category: 'Education',
                            price: 369,
                        },
                        {
                            date: '18.05.2021',
                            category: 'Education',
                            price: 852,
                        },
                        {
                            date: '19.05.2021',
                            category: 'Education',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Education',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Education',
                            price: 753,
                        }
                    ])
                }, 1000)              
            })
                .then(res => {
                    commit('setPaymentsListData', res)
                })
        },
        fetchCategoriesList({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                'Education', 'Sport', 'Navigation', 'Food', 'Entertaiment',
                ])
                }, 500)
            })
            .then(res => {
                commit('setCategoriesList', res)
            })
        },
        
       
    },
})