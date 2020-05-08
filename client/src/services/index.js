/* eslint-disable no-return-await */
import axios from 'axios';

async function getProduct(id) {
  try {
    const response = await axios.get(`api/images/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error');
    return console.log(error);
  }
}

export default { getProduct };
