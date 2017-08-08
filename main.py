from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    index_page = 'hallo'
    with open('index.html', 'r') as fp:
        index_page = fp.read()
    return index_page
