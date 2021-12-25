from flask import Flask, jsonify
import json

app = Flask(__name__)

# Members API Route

@app.route("/members")
def members():
    member = {"members": ["Member1", "Member2", "Member3"]}
    print(type(member)) # dict
    return member

@app.route('/test')
def test():
    abc = {
        "employees":[ 
            {
                "firstName":"John", 
                "lastName":"Doe"
            }, 
            {   
                "firstName":"Anna", 
                "lastName":"Smith" 
            }, 
            { 
                "firstName":"Peter",
                "lastName":"Jones" 
            }
        ]
    }
    print("abc : ", type(abc)) # dict

    json_abc = json.dumps(abc, indent=2) 
    print("json_abc : ", type(json_abc)) # str
    # print(abc["employees"][1]["lastName"])
    
    print("jsonify(json_abc) : ", type(jsonify(json_abc)))
    return jsonify(json_abc)

if __name__ == "__main__":
    app.run(debug=True)