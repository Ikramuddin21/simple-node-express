const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    {id: 0, name: 'Karim', email: 'karim@mia.com', phone: '018888888884'},
    {id: 1, name: 'Rahim', email: 'rahim@mia.com', phone: '011228888884'},
    {id: 2, name: 'Alal', email: 'alal@mia.com', phone: '012324288884'},
    {id: 3, name: 'Dulal', email: 'dulal@mia.com', phone: '018888888876'},
    {id: 4, name: 'John', email: 'john@mia.com', phone: '011558888884'},
]

app.get('/', (req, res) => {
    res.send('Hello my second node and express');
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app METHOD
app.post('/users', (req, res) => {
    console.log('hitting the post', req.body);
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mangoes', (req, res) => {
    res.send('Yummy tok mango')
})

app.listen(port, () => {
    console.log('listening to port', port);
})