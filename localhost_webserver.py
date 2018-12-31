from flask import (Flask,
                   request,
                   redirect,
                   jsonify,
                   flash,
                   send_from_directory)
import json
from flask import make_response
import requests
from flask import render_template
import os

# app = Flask(__name__)
# Flask(__name__, template_folder="wherever")
# Flask(__name__, template_folder=os.curdir)

# template_dir = os.path.abspath('/')
template_dir = os.path.abspath(os.curdir+'/view')
app = Flask(__name__, template_folder=template_dir)


@app.route('/json/<string:title>')
def getJSON(title):
    print title
    url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='
    r = requests.get(url + title)
    # print r.text
    return r.text


# Show home page.
@app.route('/')
def showLandingPage():
    # print os.path.abspath(os.curdir)
    # os.chdir("..")
    # print os.path.abspath(os.curdir)
    # template_dir = os.path.abspath(os.curdir)
    # template_dir = os.path.abspath(os.curdir+'/view')
    # print template_dir
    # print os.path.abspath(os.curdir+'/templates/view')
    # print os.curdir+'/templates/view'
    return render_template('index.html')
    # return 'test'


@app.route('/js/<path:path>')
def getJS(path):
    # print path
    return send_from_directory('js', path)


@app.route('/view_model/<path:path>')
def getViewModel(path):
    # print path
    return send_from_directory('view_model', path)


@app.route('/favicon.ico')
def favicon():
    # return send_from_directory(os.path.join(app.root_path, 'static'),
    #                            'favicon.ico', mimetype='image/vnd.microsoft.icon')
    return ''


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
