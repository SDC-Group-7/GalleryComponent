import axios from 'axios';

const getProduct = (id) => axios.get(`/api/images/${id}`)
  .then((res) => (res.data))
  .catch((error) => {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  });


// return new Promise((resolve, reject) => {
//   axios.get(`/api/images/${id}`)
//     .then(({ status, data }) => {
//       if (status === 200) {
//         resolve(data);
//       } else {
//         reject(new Error('error'));
//       }
//     });
// });
// ;

export default { getProduct };
