from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit
import datetime
import time

#app = Flask(__name__)
app = Flask(__name__, static_folder='static')
app.config['SECRET_KEY'] = 'lmao!'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()