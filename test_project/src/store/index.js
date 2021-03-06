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

        editObj: {},
        editObjIndex: 0,
    },
    mutations: {
        setPaymentsListData(state, payload) {
            // state.paymentsList.push(payload);
            state.paymentsList = payload;

            state.paymentsList.map((obj, i) => {
                obj.pos = i + 1;
            })
        },
        addPaymentsListData(state, data) {
            state.paymentsList.push(data);
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
        
        setEditObj(state, payload) {
            state.editObj = payload;
            state.editObjIndex = state.paymentsList.indexOf(payload)
        },
      
        setNewValue (state, payload) {
            state.paymentsList.splice(state.editObjIndex, 1, payload);
        },
        delItem (state) {
            state.paymentsList.splice(state.editObjIndex, 1);
            state.paymentsList.map((obj, i) => {
                obj.pos = i + 1;
            })
        }
        
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
            let days = d.getDate();
            let month = d.getMonth()+1;
            let year = d.getFullYear();
            if (days < 10) {
                days = '0' + days;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return state.curDate = `${year}-${month}-${days}`;
        },
        getEditObj: state => state.editObj,

    },
    actions: {
        fetchData({ commit }) {
            //     const data = window.localStorage.getItem('list');
            //     console.log(JSON.parse(data))
            //     commit('setPaymentsListData', JSON.parse(data))
            // },
   
            // return fetch('./list.json')
            // .then(response => response.json())
            // .then(data => {
            //     for(let el of data) {
            //         commit('setPaymentsListData', el)
            //     }
            // })
            // .catch(error => 
            //     console.log(error))
            // },


            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        {   
                            date: '12.05.2021',
                            category: 'Food',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Education',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Sport',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Food',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Entertaiment',
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
                            category: 'Food',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Sport',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Entertaiment',
                            price: 753,
                        },
                        {
                            date: '12.05.2021',
                            category: 'Education',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Food',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Sport',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Education',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Entertaiment',
                            price: 258,
                        },
                        {
                            date: '17.05.2021',
                            category: 'Education',
                            price: 369,
                        },
                        {
                            date: '18.05.2021',
                            category: 'Food',
                            price: 852,
                        },
                        {
                            date: '19.05.2021',
                            category: 'Navigation',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Education',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Food',
                            price: 753,
                        },
                        {
                            date: '12.05.2021',
                            category: 'Entertaiment',
                            price: 123,
                        },
                        {
                            date: '13.05.2021',
                            category: 'Education',
                            price: 456,
                        },
                        {
                            date: '14.05.2021',
                            category: 'Navigation',
                            price: 789,
                        },
                        {
                            date: '15.05.2021',
                            category: 'Sport',
                            price: 147,
                        },
                        {
                            date: '16.05.2021',
                            category: 'Food',
                            price: 258,
                        },
                        {
                            date: '17.05.2021',
                            category: 'Education',
                            price: 369,
                        },
                        {
                            date: '18.05.2021',
                            category: 'Food',
                            price: 852,
                        },
                        {
                            date: '19.05.2021',
                            category: 'Sport',
                            price: 741,
                        },
                        {
                            date: '20.05.2021',
                            category: 'Education',
                            price: 963,
                        },
                        {
                            date: '21.05.2021',
                            category: 'Navigation',
                            price: 753,
                        }
                    ])
                }, 0)              
            })
                .then(res => {
                    commit('setPaymentsListData', res)
                })
        },
        fetchCategoriesList({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                'Education', 'Sport', 'Navigation', 'Food', 'Entertaiment',
                ]);
                    reject(new Error('no list categories in store/index.js'));
                }, 0)
            })
            .then(res => {
                commit('setCategoriesList', res)
            })
        },
        // sendData(state) {
        //     const d = JSON.stringify(state.state.paymentsList);
        //     console.log(d);
        //     // // window.localStorage.setItem('list', d);
        //     // console.log(JSON.parse(window.localStorage.getItem('list')));
                       
        // },
       
       
    },
})