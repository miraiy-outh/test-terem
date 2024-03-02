import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: "*"
}))
const port = 3000;

app.get('/form-data', (req, res) => {
    const data = req.query;
    console.log(data);
    res.send({ message: 'Successful', data: data });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});