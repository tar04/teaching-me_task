import {axiosService} from "./axiosService";
import {urls} from "../config";

export const teacherService = {
    getAll: (categoryCode, pageSize = 0) => axiosService.post(urls.search, {
            categories: [categoryCode],
            page: 0,
            pageSize
        },
        {
            headers: {
                "Accept-Language": "en",
                "Content-Type": "application/json"
            }
        }
    ).then(({data}) => data)
}