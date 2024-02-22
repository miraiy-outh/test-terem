import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: "*"
}))
const port = 3000;

app.get('/form-data', (req, res) => {
    const data = req.query;
    res.send({ message: 'Successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});