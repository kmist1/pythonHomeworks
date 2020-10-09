const Express = require('express');
const Mongoose = require('mongoose');
const path = require('path');

const User = require('./models/User');

const app = Express(); //instantiate express

/************************************** Deployment to beanStalk*******************************************************/
const clientAppDirectory = path.join(__dirname, '../public', 'build');

app.use(Express.json());

// Middleware that allows users to get files from a directory on the server
app.use(Express.static(clientAppDirectory));


// Any other GET request that doesn't match previous routes should return the website
app.get('/*', (request, response) => {

    const indexPath = path.join(clientAppDirectory, 'index.html');
    console.log(indexPath);

    return response.sendFile(indexPath);
});


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://krunal:1154krunal@cluster0-3vfpx.mongodb.net/test?retryWrites=true&w=majority";
Mongoose.connect(uri,{useNewUrlParser: true});// connecting to the project database

Mongoose.connection.once('open', () => console.log("Connected to database!"));

app.use(Express.json());// use express middleware called json

app.post('/api/users', async (request, response) => {

    console.log('A request came in with the body: ' + JSON.stringify(request.body));

    const { name, emailAddress, message } = request.body;// pulling user information out of the request body

    try {

        const existingUser = await User.findOne({emailAddress: { $eq: emailAddress}});//Check if a user with that email already exists in the database
        
        if (existingUser) {
    
            console.log(`A user with the email address '${emailAddress}' already exists, rejecting request with a 400`);
    
            return response.sendStatus(400);
        }

        await User.create({ name: name, emailAddress: emailAddress, message: message});

        console.log(`A new user was created with name: '${name}', email address: '${emailAddress}' and message: '${message}'`);

        return response.sendStatus(200);

    } catch (error) {

        console.error('An unexpected error occured: ' + error.message);

        return response.sendStatus(500);
    }
});

const port = process.env.PORT || '4000';
app.set('port', port);
app.listen(port, () => console.log(`Server has started on localhost:${port}`))

module.exports = app;

