require('dotenv').config();

const url = 'https://sandbox.lithic.com/v1/responder_endpoints';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: process.env.LITHIC_API_KEY
  },
  body: JSON.stringify({
    type: 'AUTH_STREAM_ACCESS',
    url: 'https://lithic-payments-test.onrender.com/my_auth_stream_access_endpoint'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));