const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/my_auth_stream_access_endpoint', (req, res) => {
    console.log(req)
    console.log(body)
    // const { body: {token, amount, merchant}} = req;
  	// Custom Approve/Decline Logic ...
    // ... ex. decline if amount is > $500 ...
    // ... ex. approve if merchant code is 'groceries'
    // ... ex. decline if card was created within the last day ...

    const result = 'DECLINED'; // or 'DECLINED', 'UNAUTHORIZED_MERCHANT', etc.
    return res.json({ result, token })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});