import axios from 'axios';
export const get = (url) => {
    return axios.get(url)
        .then((res) => {
            if (res.data.code !== 0) {return};
            return res.data.data.data;
        });
};
export const getTypeshu = (url1) => {
    return axios.get(url1)
    .then((res) => {
        return res.data.data
    })
}