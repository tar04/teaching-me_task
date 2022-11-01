import {axiosService} from "./axiosService";
import {urls} from "../config";

export const avgPriceService = {
    sendInfo: (categoryName, averagePrice) => axiosService.post(urls["average-price"], {
            categoryName,
            averagePrice
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(({data}) => data),
}