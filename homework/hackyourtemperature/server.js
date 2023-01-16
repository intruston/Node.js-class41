import express from 'express';
const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello from backend to frontend!');
});

app.use(express.json());

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    res.send({cityName});
});
