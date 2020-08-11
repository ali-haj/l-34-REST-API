const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const jsonFile = require('jsonfile');
const api = require('./api')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
    api.readAll().then(data => res.send(data));
})

app.post('/', (req, res) => {
    console.log(req.body)
    api.addPost(req.body).then(data => res.send(data))
})

app.put('/', (req, res) => {
    console.log(req.body)
    api.updatePost(req.body.id, req.body.prop, req.body.value).then(data => res.send(data));
})
app.delete('/',(req,res) => {
    api.deletePost(req.body).then(data => res.send(data));
})

app.listen(3000, () => {
    console.log(`app is listening to port ${port}...`)
})