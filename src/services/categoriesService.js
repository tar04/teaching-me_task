import {axiosService} from "./axiosService";
import {urls} from "../config";

export const categoriesService = {
    getAll: () => axiosService.get(urls.categories, { headers: {"Accept-Language": "en"}}).then(({data}) => data),
}