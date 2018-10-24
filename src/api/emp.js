import axios from 'axios';

export function findEmpList () {
  axios.post('http://127.0.0.1/emp-data/empList')
    .then(function (response) {
      // console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return Promise.reject(error);
    });
}
