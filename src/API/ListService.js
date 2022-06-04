import axios from "axios";

export default class ListService{
    static async getLists(limit = 10, page = 1){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return res;
    }
    static async getCurrency(){
        const res = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        return res.data
    }
}