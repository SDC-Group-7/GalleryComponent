/* eslint-disable no-return-await */
import axios from 'axios';

const getProduct = async (id) => await axios.get(`api/images/${id}`).then((res) => res.data).catch((error) => {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
});

export default { getProduct };
