/* import axios from 'axios';
import data from './data/data.json';
import AxiosMockAdapter from 'axios-mock-adapter';
const mock = new AxiosMockAdapter(axios);
const fn = () => {
    mock.onGet('/nav').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, data]);
        });
    });
};
export default fn; */