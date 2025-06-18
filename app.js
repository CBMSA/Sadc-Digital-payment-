const express = require('express');
const app = express();
const txRoutes = require('./routes/transactions');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/tx', txRoutes);

app.listen(5000, () => console.log('CBDC Backend running on port 5000'));