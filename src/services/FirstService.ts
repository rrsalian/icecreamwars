import axios from "axios";
import { FameResponse } from "../models/FameResponse/FameResponse";

export function getAll(): Promise<FameResponse> {
    return axios
        .get<FameResponse>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
        .then(response => response.data);
}