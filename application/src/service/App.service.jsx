import axios from 'axios';
import data from './data.json';

export default class Transaction {

    constructor() {
        this.transactions = {};
    }

    static async getTransaction() {
        this.transactions = await data.data;
        return this.transactions;
    }

    // for ajax get request
    static async get(url) {
        return await axios.get(url);
    }

    // for ajax post request
    static async post(url, value) {
        return await axios.post(url, value);
    }

    // for ajax put request
    static async put(url, value) {
        return await axios.put(url, value);
    }

    // for ajax put request
    static async delete(url) {
        return await axios.delete(url);
    }
}
