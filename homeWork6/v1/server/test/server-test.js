const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');

const expect = chai.expect;
const User = require('../src/Models/User');
const server = require('../src/server');

describe('Server tests', function () {

    describe('User tests', function () {

        // Wipe the database before each test is run
        beforeEach(async function () {

            // Default timeout is two seconds, this can take longer
            this.timeout(6000);

            // Connect to the database and wipe the users collection
            await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
            await User.deleteMany({});

            console.log('Users deleted!');
        })

        it('should create a new user', async function () {

            // Make a POST request to our server with some user information
            const response = await request(server).post('/api/users')
                                                  .send({ email: 'email@address.domain'});

            // The server should return a 200 for a successful creation
            expect(response.status).to.equal(200);

            // We expect exactly one user to be in the database now
            expect(await User.count({})).to.equal(1);

            // Let's pull the user out of the database and verify some values
            const user = await User.findOne({});
            expect(user).to.not.be.null;
            expect(user.email).to.equal('email@address.domain');
            expect(user.passwordDigest).to.not.be.null;
        });

        it('should reject creating a duplicate user', async function () {

            // Make a POST request to our server with some user information
            const responseOne = await request(server).post('/api/users')
                                                     .send({ email: 'email@address.domain'});

            // The server should return a 200 for a successful creation
            expect(responseOne.status).to.equal(200);

            // We expect exactly one user to be in the database now
            expect(await User.count({})).to.equal(1);

            // Make a duplicate POST request to our server with the same user information
            const responseTwo = await request(server).post('/api/users')
                                                     .send({ email: 'email@address.domain'});

            // The server should now return a 400                                   
            expect(responseTwo.status).to.equal(400);

            // Ensure no additional user was added to the database
            expect(await User.count({})).to.equal(1);
        });
    });
});

