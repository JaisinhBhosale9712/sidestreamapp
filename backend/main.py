from flask import Flask, request, jsonify, session, make_response
from flask_cors import CORS
import random
import ast
app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")
app.config['CORS_HEADERS'] = 'Content-Type'
ERROR_CODES = [error_code for error_code in range(50)]
CORS(app)
@app.route("/")
def generate_lists():
    """Generate resolved, unresolved and backlog lists."""
    resolved_list = [{
            'index': error_idx,
            'code': random.choice(ERROR_CODES),
            'text': 'Error ABC occured, that is `resolved`',
            'status': 'resolved'
        } for error_idx in range(50)]

    unresolved_list = [{
            'index': error_idx,
            'code': random.choice(ERROR_CODES),
            'text': 'Error DEF occured, that is `unresolved`',
            'status':'unresolved'
        } for error_idx in range(50, 100)]

    backlog_list = [{
            'index': error_idx,
            'code': random.choice(ERROR_CODES),
            'text': 'Error XYZ occured, that is in the `backlog`',
            'status': 'backlog'
        } for error_idx in range(100, 150)]
    generated_list = resolved_list + unresolved_list + backlog_list
    session["list"] = generated_list
    session["list_backup"] = generated_list
    response = jsonify(generated_list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/undo_all",methods=["GET"])   #Undos all data based on session cookie
def undo_all():
    return jsonify(session["list"])

@app.route("/get_list_intersection_counts",methods=["POST"])
def get_list_intersection_counts():
    data = request.data
    data = data.decode("utf-8")
    data = ast.literal_eval(data)
    backlog_codes = []
    resolved_codes = []
    unresolved_codes = []
    for each in data:
        if each["status"]=="resolved":
            resolved_codes.append(each["code"])
        if each["status"] == "unresolved":
            unresolved_codes.append(each["code"])
        if each["status"]=="backlog":
            backlog_codes.append(each["code"])
    resolved_unresolved = len(set.intersection(set(resolved_codes),set(unresolved_codes)))
    resolved_backlog = len(set.intersection(set(resolved_codes),set(backlog_codes)))
    unresolved_backlog = len(set.intersection(set(unresolved_codes),set(backlog_codes)))
    return jsonify([{"resolved_unresolved":resolved_unresolved,"resolved_backlog":resolved_backlog,
                     "unresolved_backlog":unresolved_backlog}])

@app.route("/test")
def test():
    return "Test"

if __name__ == "__main__":
    app.run(debug=True)
