# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getmsg/', methods=['GET'])
def respond():
    # Get name from URL parameter and prepare response
    text = request.args.get("text", None)
    response = {}
    # Send error if no text sent
    if not text:
        response["ERROR"] = "No text sent. Please send some text."
    # Otherwise, return the text in title case
    else:
        response["TITLE"] = text.title()
    # JSONify and return the response
    return jsonify(response)


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)