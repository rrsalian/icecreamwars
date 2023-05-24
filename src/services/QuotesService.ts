import axios from "axios";

export function getQuotes(): Promise<any> {
    return axios
        .get<any>('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then(response => response.data);
}