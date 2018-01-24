import axios from 'axios';
import { connect } from 'react-redux';
import {fetchposts} from '../actions';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

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
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => redirectCallback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export const deletePost = (id, redirectCallback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => { redirectCallback() });

  return {
    type: DELETE_POST,
    payload: id
  }
}
