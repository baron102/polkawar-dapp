import axios from 'axios';
import baseUrl from '../actions/baseUrl';
import { GET_CURRENT_USER, GET_ERRORS } from './types';

//GET all characters
export const authenticateUser = (address) => (dispatch) => {
  axios
    .get(`${baseUrl}/user/${address}`)
    .then((res) => {
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
