from flask import Flask, jsonify, request
from dotenv import load_dotenv
import os 
from pymongo import MongoClient 

app = Flask(__name__)

# Load environment variables 
load_dotenv()

# Access environment variables 
ATLAS_URI = os.getenv("ATLAS_URI")
DB_NAME = os.getenv("DB_NAME")

# Connect to MongoDB
mongo_client = MongoClient(ATLAS_URI)
db = mongo_client.get_database(DB_NAME)

# Routes
@app.route("/")
def testing():
    return jsonify({"message": "Server is listening!"})

if __name__ == "__main__":
    app.run(debug=True, port=3009)