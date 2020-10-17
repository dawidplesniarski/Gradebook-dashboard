export const API_URL = 'https://node-app-4fun.herokuapp.com';

export function compareArrays(arr1, arr2) {
    let finalArr = [];
    arr1.forEach((el) => arr2.forEach((el1) => {
        if(el._id === el1._id) {
            finalArr.push(el);
        }
    }));
    return finalArr;
}