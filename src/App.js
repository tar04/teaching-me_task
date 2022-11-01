import React, {useState} from "react";

import {Button, RequestModal} from "./components";
import {categoriesService, teacherService} from "./services";
import {avgPriceService} from "./services";
import {normalizeArr} from "./utils";

const App = () => {

    const [isModalActive, setIsModalActive] = useState(false);

    const showModal = () => {
        setIsModalActive(prev => !prev)
    }

    const calcAvg = async () => {
        const allCategories = normalizeArr(await categoriesService.getAll());

        for (const category of allCategories) {
            teacherService.getAll(category.code).then(data => {

                teacherService.getAll(category.code, data.totalResults).then(({teachers}) => {
                    const avgPrice = teachers.reduce((acc, item) => acc + item.pricePerHour, 0) / teachers.length;

                    avgPriceService.sendInfo(category.name, avgPrice.toFixed(1));
                })
            })
        }
    }

    return (
        <div className="main">
            <Button click={calcAvg}>Calculate average price</Button>
            <Button click={showModal}>Show modal(task 2)</Button>
            <RequestModal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
        </div>
    );
};

export {App};