/*eslint-disable*/
import Vue from 'vue'

export const state = Vue.observable({
    count: 0
})

export const mutations = {
    SET_COUNT(num) {
        if (!!num) {
            state.count = num
        }
    }
}
