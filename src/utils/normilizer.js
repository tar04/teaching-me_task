export function normalizeArr(arr, newArr = []) {

    for (const arrElement of arr) {
        const item = {};

        for (const key in arrElement) {
            if (!Array.isArray(arrElement[key])) {
                item[key] = arrElement[key];
            } else {
                normalizeArr(arrElement[key], newArr)
            }
        }

        newArr.push(item);
    }

    return newArr;
}