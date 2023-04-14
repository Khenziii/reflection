from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit

#app = Flask(__name__)
app = Flask(__name__, static_folder='static')
app.config['SECRET_KEY'] = 'damn'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()