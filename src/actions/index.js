import axios from 'axios';
import { connect } from 'react-redux';
import {fetchposts} from '../actions';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=evens2468';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, redirectCallback) => {
  console.log('action received', values);
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => redirectCallback());

  return {
    type: CREATE_POST,
    payload: request
  }
}
