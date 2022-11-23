const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

const listingsRoutes = require('./routes/listingsRoute');
const sellersRoutes = require('./routes/sellersRoute');

app.use(express.json());
app.use(cors());

app.use('/', listingsRoutes);
app.use('/seller-signup', sellersRoutes);

app.use('/login', (req, res) => {
    res.send({
      token: 'testingtesting123'
    });
  });

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});