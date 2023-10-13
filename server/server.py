import pymongo

connection_str = "mongodb+srv://mphamrtin:KgvMdeWELyXyuKwr@production-cluster.i1omnud.mongodb.net/?retryWrites=true&w=majority"

try:    
    client = pymongo.MongoClient(connection_str)
except Exception:
    print("Error: " + Exception)


