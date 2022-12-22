const express = require('express');
const cors = require('cors');

const {getHouses, deleteHouses, createHouses, updateHouses} = require('./controllers');


const app = express();

//middleware
app.use(cors());

app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouses);
app.delete('/api/houses/:id', deleteHouses);
app.put('/api/houses/:id', updateHouses);

app.listen(4004, () => {
    console.log('listening on port 4004...');
})