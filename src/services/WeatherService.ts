import axios from "axios";
import { FameResponse } from "../models/FameResponse/FameResponse";

export function getAllWeather(): Promise<any> {
    return axios
        .get<FameResponse>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data);
}