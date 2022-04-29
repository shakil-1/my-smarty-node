const { request } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello form my smarty Pant!!');
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01789665574' },
    { id: 2, name: 'sabnor', email: 'sabnor@gmail.com', phone: '01398745632' },
    { id: 3, name: 'sabonti', email: 'sabonti@gmail.com', phone: '01696541236' },
    { id: 4, name: 'salma', email: 'salma@gmail.com', phone: '10896457896' },
    { id: 5, name: 'sabila', email: 'sabila@gmail.com', phone: '01589654125' },
    { id: 6, name: 'sarika', email: 'sarika@gmail.com', phone: '01398651578' },
    { id: 7, name: 'shobnom', email: 'shobnom@gmail.com', phone: '01632154632' },
];

app.get('/users', (req, res) => {
    // console.log('quary', req.query);
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const meatch = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        req.send(meatch)
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);

    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
});