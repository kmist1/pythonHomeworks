from flask import request, Flask
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient('mongodb://my_db:27017')
db = client.userDB

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, this is trial app :) '


''' *********************** Creating new user *********************** '''


@app.route('/usersTest', methods=['POST'])
def post_user():
    print('Im in users route')

    try:
        '''creating a new user, if user exists return error message else create user'''
        data = json.loads(request.data)
        firstName = data['FirstName']
        lastName = data['LastName']
        email = data['Email']

        if firstName and lastName and email:
            db.users.insert_one({
                "FirstName" : firstName,
                "LastName": lastName,
                "Email": email
            })

        return dumps({'message': 'SUCCESS'}), 200

    except Exception as e:
        '''error?'''
        return dumps({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True,port=5001, host='0.0.0.0')
