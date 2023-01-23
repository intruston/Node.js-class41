import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello from backend to frontend!');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
  });

export default app;