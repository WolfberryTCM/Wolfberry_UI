import axios from 'axios';

// We will send the token with every request, instead of choosing which one to send with token or not.
const setAuthToken = token => {
  if (token) {
    axios.defaults.header.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
